import { test, expect } from "../base";
import { AboutPage } from "../pages/about.page";
import FeedbackModal from "../pages/feedback-form.page";

test.describe("Verify Feedback Controls", () => {
  let feedbackModal: FeedbackModal;

  test.beforeEach(async ({ page }) => {
    feedbackModal = new FeedbackModal(page);

    await page.goto(AboutPage.aboutUrl);
    await feedbackModal.open();
  });

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
