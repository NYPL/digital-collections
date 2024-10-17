import { render, screen, fireEvent, act } from "@testing-library/react";
import { FeedbackProvider, useFeedbackContext } from "./FeedbackProvider";
import { useFeedbackBox } from "@nypl/design-system-react-components";

jest.mock("@nypl/design-system-react-components", () => ({
  useFeedbackBox: jest.fn(),
}));

describe("FeedbackProvider", () => {
  const mockUseFeedbackBox = useFeedbackBox as jest.Mock;
  const mockOnOpen = jest.fn();

  beforeEach(() => {
    mockUseFeedbackBox.mockReturnValue({
      isOpen: false,
      FeedbackBox: ({ onSubmit, view }) => (
        <div>
          <button onClick={mockOnOpen}>Feedback</button>
          {view === "form" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ category: "Comment", comment: "Test comment" });
              }}
            >
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ),
    });
  });

  it("renders children and FeedbackBox", () => {
    render(
      <FeedbackProvider>
        <div>children</div>
      </FeedbackProvider>
    );

    expect(screen.getByText("children")).toBeInTheDocument();
    expect(screen.getByText("Feedback")).toBeInTheDocument();
  });

  it("throws error when used outside FeedbackProvider", () => {
    const Test = () => {
      useFeedbackContext();
      return <div />;
    };

    expect(() => render(<Test />)).toThrow(
      "useFeedbackContext must be used within its provider"
    );
  });

  it("calls onOpen when button is clicked", () => {
    render(
      <FeedbackProvider>
        <div>children</div>
      </FeedbackProvider>
    );

    fireEvent.click(screen.getByText("Feedback"));
    expect(mockOnOpen).toHaveBeenCalled();
  });

  it("submits feedback form successfully", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    render(
      <FeedbackProvider>
        <div>Test Child</div>
      </FeedbackProvider>
    );

    fireEvent.click(screen.getByText("Feedback"));
    fireEvent.click(screen.getByText("Submit"));

    expect(fetch).toHaveBeenCalledWith("/api/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: "Comment", comment: "Test comment" }),
    });
    expect(screen.getByText("Feedback")).toBeInTheDocument();
  });

  it.skip("handles feedback form submission error", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    render(
      <FeedbackProvider>
        <div>children</div>
      </FeedbackProvider>
    );

    fireEvent.click(screen.getByText("Feedback"));
    fireEvent.click(screen.getByText("Submit"));
  });
});
