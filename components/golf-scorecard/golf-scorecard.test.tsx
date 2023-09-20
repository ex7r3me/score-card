/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"
// @ts-ignore
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import GolfScorecard from "./golf-scorecard"

describe('GolfScorecard', () => {
  it('handles keyboard navigation correctly', async () => {
    render(<GolfScorecard />)
    
    const user = userEvent.setup()
    await user.keyboard('{Tab}{Down}{Right}')

    expect(screen.getByText(1)).toHaveFocus()
  })
})