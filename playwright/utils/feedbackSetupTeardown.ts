import { google } from "googleapis";

export interface SheetRowData {
  type: string;
  feedback: string;
  timestamp: string;
  page: string;
  ip: string;
  browser: string;
  version: string;
}

const EXPECTED_DEV_TITLE = "AUTOMATED-DEV-FEEDBACK-SHEET-DONT-TOUCH";
const MAX_ALLOWED_DEV_ROWS = 50;

export class SheetsTeardownUtil {
  private spreadsheetId: string;

  constructor() {
    this.spreadsheetId = process.env.SPREADSHEET_ID || "";
    if (!this.spreadsheetId) {
      throw new Error(
        "SAFETY ERROR: SPREADSHEET_ID environment variable is missing."
      );
    }
  }

  private getSheetsClient() {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
  }

  private async getActiveSheetData(rangeColumn: string = "A:Z") {
    const sheets = this.getSheetsClient();

    const meta = await sheets.spreadsheets.get({
      spreadsheetId: this.spreadsheetId,
    });

    const fileTitle = meta.data.properties?.title || "Unknown File Name";
    const activeSheet = meta.data.sheets?.[0]?.properties;

    if (!activeSheet?.title) {
      throw new Error("ERROR: Could not find any tabs in this spreadsheet.");
    }

    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `'${activeSheet.title}'!${rangeColumn}`,
    });

    return {
      fileTitle,
      tabName: activeSheet.title,
      numericSheetId: activeSheet.sheetId ?? 0,
      rows: data.data.values || [],
    };
  }

  public async assertIsDevSpreadsheet(): Promise<void> {
    const { fileTitle, tabName, rows } = await this.getActiveSheetData("A:A");
    console.log(`[GUARDRAIL] Confirmed DEV sheet ("${fileTitle}")`);
    console.log(
      `[Spreadsheet ID] ${
        this.spreadsheetId
          ? `${this.spreadsheetId.slice(0, 4)}*****${this.spreadsheetId.slice(
              -4
            )}`
          : "N/A"
      }`
    );
    console.log(
      `[Current Rows] ${rows.length} / ${MAX_ALLOWED_DEV_ROWS} max rows allowed`
    );

    if (fileTitle !== EXPECTED_DEV_TITLE) {
      throw new Error(
        `GUARDRAIL FAILURE: Sheet title is "${fileTitle}", expected "${EXPECTED_DEV_TITLE}". Aborting!`
      );
    }

    if (rows.length > MAX_ALLOWED_DEV_ROWS) {
      throw new Error(
        `GUARDRAIL FAILURE: Sheet has ${rows.length} rows (Limit: ${MAX_ALLOWED_DEV_ROWS}). Aborting!`
      );
    }
  }

  // Fetch and map 7 target columns for a row matching the signature.
  public async getRowBySignature(
    commentSignature: string
  ): Promise<SheetRowData | null> {
    const { rows } = await this.getActiveSheetData("A:H");

    const matchedRow = rows.find((row) =>
      String(row[1] || "").includes(commentSignature)
    );

    if (!matchedRow) {
      return null;
    }

    const [type, feedback, timestamp, page, ip, platform, browser, version] =
      matchedRow;

    return {
      type,
      feedback,
      timestamp,
      page,
      ip,
      browser,
      version,
    };
  }

  public async deleteTestRows(commentSignatures: string[]): Promise<void> {
    if (!commentSignatures.length) {
      console.log("WARNING: Teardown skipped - No search signatures provided.");
      return;
    }

    const { tabName, numericSheetId, rows } =
      await this.getActiveSheetData("A:Z");

    console.log(`Scanned ${rows.length} total rows in "${tabName}"...`);

    const matchedRowsInfo: { index: number; text: string }[] = [];

    rows.forEach((row, idx) => {
      const feedbackText = String(row[1] || "");
      const isMatch = commentSignatures.some((sig) =>
        feedbackText.includes(sig)
      );

      if (isMatch) {
        matchedRowsInfo.push({ index: idx, text: feedbackText });
      }
    });

    if (matchedRowsInfo.length === 0) {
      console.log(`[INFO] No matching rows found for deletion.`);
      return;
    }

    console.log(
      `\n[FOUND] ${matchedRowsInfo.length} MATCHING ROW(S) TO DELETE:`
    );
    matchedRowsInfo.forEach((item) => {
      console.log(
        `  - Sheet Row ${item.index + 1} (Zero-index ${item.index}): "${
          item.text
        }"`
      );
    });

    const rowIndices = matchedRowsInfo
      .map((m) => m.index)
      .sort((a, b) => b - a);

    console.log(`\nExecuting batch deletion request (bottom-to-top)...`);

    const sheets = this.getSheetsClient();

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.spreadsheetId,
      requestBody: {
        requests: rowIndices.map((idx) => ({
          deleteDimension: {
            range: {
              sheetId: numericSheetId,
              dimension: "ROWS",
              startIndex: idx,
              endIndex: idx + 1,
            },
          },
        })),
      },
    });

    console.log(
      `[TEARDOWN] Deleted ${rowIndices.length} row(s) from tab "${tabName}".`
    );
  }
}
