/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import GolfScorecard from "./golf-scorecard"

describe('GolfScorecard', () => {
  it('handles keyboard navigation correctly', async () => {
    render(<GolfScorecard />)
    
    const user = userEvent.setup()
    await user.keyboard('{Tab}{Right}')

    expect(screen.getByText('hole')).toHaveFocus()
  })
})