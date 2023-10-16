import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import { axe } from "jest-axe";


describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
        <Home />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Home', () => {
  it('renders the Campaign Hero', () => {
    render(<Home />);
    const header = screen.getByRole('heading', {
      name: "Explore 863,848 items digitized from The New York Public Library's collections.",
    });
    expect(header).toBeInTheDocument();
  });
});