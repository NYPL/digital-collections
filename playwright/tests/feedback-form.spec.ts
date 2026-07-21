import { test, expect } from "../base";
import { AboutPage } from "../pages/about.page";
import FeedbackModal from "../pages/feedback-form.page";

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
    // Placeholder runs the 3 types of test: comment, bug, correction
    // and checks test account to verify all were received correctly.

    let liveTestComment: string;

    test.beforeEach(async () => {
      const timestamp = new Date().toISOString();
      liveTestComment = `TEST - QA Integration Test - ${timestamp}`;
    });

    // Integration test block (No Mocks)
    test("should successfully submit a comment", async () => {
      // Allow API call to go through
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCommentRadioButton,
        liveTestComment
      );
    });

    test("should successfully submit a bug report", async () => {
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackBugRadioButton,
        liveTestComment
      );
    });

    test("should successfully submit a correction", async () => {
      await feedbackModal.verifySuccessfulSubmission(
        feedbackModal.feedbackCorrectionRadioButton,
        liveTestComment
      );
    });
  });
});
