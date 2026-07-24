import { test, expect } from "../base";
import { AboutPage } from "../pages/about.page";
import FeedbackModal from "../pages/feedback-form.page";
import { SheetsTeardownUtil } from "../utils/feedbackSetupTeardown";

test.describe("Feedback UX & Integration Tests", () => {
  let feedbackModal: FeedbackModal;

  test.beforeEach(async ({ page }) => {
    feedbackModal = new FeedbackModal(page);

    await page.goto(AboutPage.aboutUrl);
    await feedbackModal.open();
  });

  test.describe("Verify UX Feedback Controls", () => {
    test("should dynamically update the character counter", async () => {
      await feedbackModal.verifyCharacterCounterUpdates();
    });

    test("should successfully submit a bug report", async () => {
      await feedbackModal.setupNetworkMock();
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackBugRadioButton
      );
    });

    test("should successfully submit a comment", async () => {
      await feedbackModal.setupNetworkMock();
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCommentRadioButton
      );
    });

    test("should successfully submit a correction", async () => {
      await feedbackModal.setupNetworkMock();
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCorrectionRadioButton
      );
    });
  });
  test.describe("Verify Feedback data", () => {
    let sheetsUtil: SheetsTeardownUtil;
    let liveTestComment: string;
    const createdSignatures: string[] = [];

    test.beforeAll(async () => {
      sheetsUtil = new SheetsTeardownUtil();
      // Guardrail check executes once before running live integration tests
      await sheetsUtil.assertIsDevSpreadsheet();
    });

    test.afterAll(async () => {
      // Clean up all rows generated across integration test runs
      if (createdSignatures.length > 0) {
        await sheetsUtil.deleteTestRows(createdSignatures);
      }
    });

    test.beforeEach(async () => {
      const timestamp = new Date().toISOString();
      liveTestComment = `TEST - QA Integration Test - ${timestamp}`;
      createdSignatures.push(liveTestComment);
    });

    // Integration tests (No Mocks -> Real Sheet Verification via POM)
    test("should successfully submit a comment", async () => {
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCommentRadioButton,
        liveTestComment
      );

      await feedbackModal.verifySheetRowData(
        sheetsUtil,
        liveTestComment,
        "comment",
        AboutPage.aboutUrl
      );
    });

    test("should successfully submit a bug report", async () => {
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackBugRadioButton,
        liveTestComment
      );

      await feedbackModal.verifySheetRowData(
        sheetsUtil,
        liveTestComment,
        "bug",
        AboutPage.aboutUrl
      );
    });

    test("should successfully submit a correction", async () => {
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCorrectionRadioButton,
        liveTestComment
      );

      await feedbackModal.verifySheetRowData(
        sheetsUtil,
        liveTestComment,
        "correction",
        AboutPage.aboutUrl
      );
    });
  });
});
