import type { NextApiRequest } from "next";
import { google } from "googleapis";
import requestIp from "request-ip";
import { UAParser } from "ua-parser-js";
import { getCustomTimestamp } from "../../utils/utils";
import { NextResponse } from "next/server";

export const POST = async (request: NextApiRequest, response: NextResponse) => {
  // Values to pass to spreadsheet
  console.log(request);
  const body = request.body;
  console.log("body");
  const { category: type, comment: feedbackText } = body;
  console.log(JSON.stringify(body));

  // timestamp
  const timestamp = getCustomTimestamp();
  // page (route)
  const referer = request.headers.referer || "";
  //console.log(referer);
  const origin = request.headers.origin || "";
  //console.log(origin);
  //const page = "/"; //setting to root for now
  const page = referer.replace(origin, "");
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
    //console.log(auth);

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
    //console.log(googleResponse);

    return NextResponse.json(
      {
        text: "successful feedback form submission",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e.message,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
// http://localhost:3000/api/feedback
