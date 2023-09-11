/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainMenu from "./main-menu";
import React from "react";

test("it renders a link back home", async () => {
  render(<MainMenu />);

  // expect(screen.getByText('Scorecard').closest('a')).toHaveAttribute('href', '/')
});
