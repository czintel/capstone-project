import { render, screen } from '@testing-library/react'
import LearningPage from './LearningPage'

describe('LearningPage', () => {
  it('renders', () => {
    render(<LearningPage />)
    expect(
      screen.getByText('Willkommen im Lernbereich von Hpmf!')
    ).toBeInTheDocument()
  })
})
