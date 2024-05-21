import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import requestIp from "request-ip";
import { UAParser } from "ua-parser-js";
import { getCustomTimestamp } from "@/utils/utils";

export default async function feedbackFormHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  if (method !== "POST") {
    return response
      .status(405)
      .send({ message: "only POST requests are allowed" });
  }

  // Values to pass to spreadsheet
  const body = request.body;
  const { category: type, comment: feedbackText } = body;

  // timetamp
  const timestamp = getCustomTimestamp();
  // page (route)
  const referrer = request.headers.referer;
  const origin = request.headers.origin;
  const page = referrer.replace(origin, "");
  // ipAddress
  const ipAddress = requestIp.getClientIp(request); // on localhost you'll see 127.0.0.1 if you're using IPv4 or ::1, ::ffff:127.0.0.1 if you're using IPv6
  // userPlatform, userBrowser, userVersion
  const userAgentParser = new UAParser(request.headers["user-agent"]);
  const userAgent = userAgentParser.getResult();
  const userPlatform = userAgent.device.model;
  const userBrowser = userAgent.browser.name;
  const userVersion = userAgent.browser.version;

  try {
    //prepare auth
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

    const googleResponse = await sheets.spreadsheets.values.append({
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

    return response.status(200).json({
      text: "successful feedback form submission",
    });
  } catch (e) {
    return response.status(500).send({
      message: e.message,
      error: "Internal Server Error",
    });
  }
}
// http://localhost:3000/api/feedback
