import { render, screen } from '@testing-library/react'
import StartPage from './StartPage'

describe('StartPage', () => {
  it('renders', () => {
    render(<StartPage />)
    expect(screen.getByText('StartPage')).toBeInTheDocument()
  })
})
