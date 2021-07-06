import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePage />)
    expect(screen.getByText('Willkommen zu Hmpf!')).toBeInTheDocument()
  })
})
