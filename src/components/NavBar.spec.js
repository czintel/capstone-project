import { render, screen } from '@testing-library/react'
import Router from 'react'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    )
    expect(screen.getByRole('NavLink')).toBeInTheDocument()
  })
})
