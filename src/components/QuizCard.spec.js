import { render, screen } from '@testing-library/react'
import QuizCard from './QuizCard'

describe('QuizCard', () => {
  it('renders', () => {
    render(<QuizCard />)
    expect(screen.getByText('QuizCard')).toBeInTheDocument()
  })
})
