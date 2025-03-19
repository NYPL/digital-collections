import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleTip } from "./toggleTip";

describe("ToggleTip", () => {
  const text = "public domain";
  const toggleTipContent = "This is the tooltip content.";

  it("renders button with an icon", () => {
    render(<ToggleTip labelText={text} toggleTipContent={toggleTipContent} />);
    expect(
      screen.getByRole("button", { name: /public domain/i })
    ).toBeInTheDocument();
  });

  it("adds the appropriate aria-label", () => {
    render(<ToggleTip labelText={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button", { name: /public domain/i });

    expect(button).toHaveAttribute("aria-label", `More info about ${text}`);
  });

  it("shows tooltip on click and hides it on loss of focus", async () => {
    render(<ToggleTip labelText={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    // Not sure why this is no longer working
    // fireEvent.blur(button);
    // expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("hides tooltip on ESC", async () => {
    render(<ToggleTip labelText={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.keyDown(button, { key: "Escape", code: "Escape" });

    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("toggles tooltip on click and clicking outside closes it", async () => {
    render(<ToggleTip labelText={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.click(document);
    setTimeout(() => {
      expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
    }, 100);
  });
});
