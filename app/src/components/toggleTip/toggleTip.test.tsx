import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleTip } from "./toggleTip";

describe("ToggleTip", () => {
  const text = "More info";
  const toggleTipContent = "This is the tooltip content.";

  it("renders button with an icon", () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    expect(
      screen.getByRole("button", { name: /more info/i })
    ).toBeInTheDocument();
  });

  it("shows tooltip on focus and hides it on blur", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.focus(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.blur(button);
    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("hides tooltip on ESC", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.focus(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.keyDown(button, { key: "Escape", code: "Escape" });

    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("toggles tooltip on click and requires click outside to close", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.click(document);
    setTimeout(() => {
      expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
    }, 100);
  });
});
