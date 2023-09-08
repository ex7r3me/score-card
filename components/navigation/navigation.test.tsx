/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./navigation";

test("it renders a link back home", async () => {
  render(<Navigation />);

  expect(screen.getByText('Scorecard').closest('a')).toHaveAttribute('href', '/')
});
