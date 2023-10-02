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
    await user.keyboard('{Tab}{Down}{Right}')

    expect(screen.getByText(1)).toHaveFocus()
  })

  it('handles score input by keyboard', async () => {
    render(<GolfScorecard />)

    const user = userEvent.setup()
    await user.keyboard('{Tab}{Down}{Right}{Right}{6}')

    const cellInput: HTMLInputElement = screen.getByLabelText('player 1 score for hole 1')
    
    expect(cellInput.value).toEqual("6")
  })

  it('handles score input by mouse and keyboard', async () => {
    render(<GolfScorecard />)

    const cellInput: HTMLInputElement = screen.getByLabelText('player 1 score for hole 2')
    const user = userEvent.setup()
    await user.click(cellInput)
    await user.keyboard('{4}')

    expect(cellInput.value).toEqual("4")
  })
})