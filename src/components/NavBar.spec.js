import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders the nav bar', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    )

    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })

  it('contains at leat one link', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
