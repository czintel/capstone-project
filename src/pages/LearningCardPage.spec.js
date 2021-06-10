import { render, screen } from '@testing-library/react'
import LearningCardPage from './LearningCardPage'

describe('LearningCardPage', () => {
  it('renders', () => {
    render(<LearningCardPage />)
    expect(screen.getByText('LearningCardPage')).toBeInTheDocument()
  })
})
