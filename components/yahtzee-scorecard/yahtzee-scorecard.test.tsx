/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import YahtzeeScorecard from "./yahtzee-scorecard"
import userEvent from '@testing-library/user-event'

describe('YahtzeeScorecard', () => {
  it('handles keyboard navigation correctly', async () => {
    render(<YahtzeeScorecard />)
    
    const user = userEvent.setup()
    await user.keyboard('{Tab}{Up}')

    expect(screen.getByText('hole')).toHaveFocus()
  })
})