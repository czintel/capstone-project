import { render, screen } from '@testing-library/react'
import LearningCard from './LearningCard'

describe('Card', () => {
  it('renders', () => {
    render(
      <LearningCard
        name="Name of the emotion"
        description="Description of the Emotion"
        tags="Tag of the emotion"
      />
    )
    expect(
      screen.getByText(
        'Name of the emotion',
        'Description of the Emotion',
        'Tag of the emotion'
      )
    ).toBeInTheDocument()
  })
})
