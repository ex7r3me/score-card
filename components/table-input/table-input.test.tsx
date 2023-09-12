import "@testing-library/jest-dom";

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import TableInput from "./table-input";

test("it renders a link back home", async () => {
  render(<TableInput />);

  // expect(screen.getByText('Scorecard').closest('a')).toHaveAttribute('href', '/')
});
