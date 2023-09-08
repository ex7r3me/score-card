/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './page'

it('it displays heading', async () => {
    render(<Page />)

    await screen.findByRole('heading')
    
    expect(screen.getByRole('heading')).toHaveTextContent('Golf')
})