import { expect, Locator, Page } from "@playwright/test";
import { DCHomepage } from "./homepage.page";

export default class FeedbackModal extends DCHomepage {
  readonly feedbackPage: Page;
  readonly charCount: Locator;
  readonly successBanner: Locator;

  readonly defaultComment = "Found a rendering glitch on the item viewer page.";
  readonly expectedRemainingChars = "451 characters remaining";

  constructor(page: Page) {
    super(page);
    this.feedbackPage = page;

    this.charCount = this.feedbackForm.getByText("characters remaining");
    this.successBanner = this.feedbackForm.getByText(
      /thank you for submitting your feedback/i
    );
  }

  // open feedback modal
  async open(): Promise<void> {
    await this.feedbackButton.click();
    await expect(this.feedbackForm).toBeVisible();
  }

  // setup mock
  async setupNetworkMock() {
    await this.feedbackPage.route("**/api/feedback", async (route) => {
      const payload = route.request().postDataJSON();
      expect(payload).toMatchObject({ comment: this.defaultComment });
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ status: "success" }),
      });
    });
  }

  // check input fills correctly for comments box
  async verifyCharacterCounterUpdates() {
    await this.feedbackTextArea.fill(this.defaultComment);
    await expect(this.charCount).toHaveText(this.expectedRemainingChars);
  }

  // check comment, correction, and bug categories
  async verifySuccessfulSubmission(categoryLocator: Locator): Promise<void> {
    await this.feedbackPage
      .locator("label")
      .filter({ has: categoryLocator })
      .click();

    await this.feedbackTextArea.fill(this.defaultComment);
    await this.feedbackSubmitButton.click();
    await expect(this.successBanner).toBeVisible();
  }
}
