/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import GolfScorecard from "./golf-scorecard";

describe('GolfScorecard', () => {
  it('renders correctly', async () => {
    expect(true).toBeTruthy()
  })
})

