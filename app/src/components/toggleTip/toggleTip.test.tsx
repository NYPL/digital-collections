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

  it("shows tooltip on hover and hides it on mouse leave", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.mouseEnter(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.mouseLeave(button);
    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("shows tooltip on focus and hides it on blur", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.focus(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.blur(button);
    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("toggles tooltip on click and requires another click to close", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });

  it("does not close the tooltip on hover leaving if it was opened by click", async () => {
    render(<ToggleTip text={text} toggleTipContent={toggleTipContent} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.mouseLeave(button);
    expect(screen.getByText(toggleTipContent)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText(toggleTipContent)).not.toBeInTheDocument();
  });
});
