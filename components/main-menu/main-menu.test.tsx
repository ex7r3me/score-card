/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainMenu from "./main-menu";
import userEvent from "@testing-library/user-event";
import React from "react";

test("it renders menuitems with links on click", async () => {
  render(<MainMenu />);

  const btn = screen.getByRole('button')
  const user = userEvent.setup()
  await user.click(btn)

  const links: HTMLLinkElement[] = screen.getAllByRole('menuitem')
  expect(links[0].href).toBe('http://localhost/')
  expect(links[1].href).toBe('http://localhost/golf')
  expect(links[2].href).toBe('http://localhost/yahtzee')
  expect(links[3].href).toBe('http://localhost/about')  
});
