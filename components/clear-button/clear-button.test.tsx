/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ClearButton from './clear-button'

describe('ClearButton', () => {
  it('it displays the button', async () => {
      render(<ClearButton onAccept={() => {}} />)
  
      await screen.findByRole('button')
      
      expect(screen.getByRole('button')).toBeInTheDocument()
  })


})