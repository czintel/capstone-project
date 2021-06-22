import { render, screen } from '@testing-library/react'
import QuizPage from './QuizPage'

describe('QuizPage', () => {
  it('renders', () => {
    render(<QuizPage />)
    expect(screen.getByText('QuizPage')).toBeInTheDocument()
  })
})
