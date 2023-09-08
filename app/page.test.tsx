/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

test("it displays correct heading", async () => {
  render(<Page />);

  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to Scorecard!')
});
