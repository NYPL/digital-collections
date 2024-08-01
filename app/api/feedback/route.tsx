import { google } from "googleapis";
import { UAParser } from "ua-parser-js";
import { getCustomTimestamp } from "../../../src/utils/utils";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { category: type, comment: feedbackText } = body;

    const timestamp = getCustomTimestamp();
    const referer = request.headers.get("referer") || "";
    const origin = request.headers.get("origin") || "";
    const page = referer.replace(origin, "");
    const ipAddress = request.headers.get("x-forwarded-for") || "";
    const userAgentParser = new UAParser(
      request.headers.get("user-agent" as string) ?? undefined
    );
    const userAgent = userAgentParser.getResult();
    const userPlatform = userAgent.device.model || "";
    const userBrowser = userAgent.browser.name || "";
    const userVersion = userAgent.browser.version || "";

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            type,
            feedbackText,
            timestamp,
            page,
            ipAddress,
            userPlatform,
            userBrowser,
            userVersion,
          ],
        ],
      },
    });

    return NextResponse.json(
      {
        text: "successful feedback form submission",
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          message: e.message,
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          message: "unknown error occurred",
        },
        { status: 400 }
      );
    }
  }
};
