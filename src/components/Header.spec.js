import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />)

    const header = screen.getByRole('header')
    expect(header).toBeInTheDocument()
  })

  it('contains the logo', () => {
    render(<Header />)

    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
