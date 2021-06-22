import React from 'react'
import QuizPage from './QuizPage'

export default {
  title: 'Pages/QuizPage',
  component: QuizPage,
}

const Template = args => <QuizPage {...args} />

export const DefaultLearningCard = Template.bind({})
DefaultLearningCard.args = [
  {
    title: 'Stell dir vor...',
    scenario:
      'Du spielst gerade mit deinen Freunden ein Fußballmatch und bist kurz davor, ein Tor zu schießen. In diesem Moment foult dich ein Gegner, um dich an deinem Tor zu hindern und lacht dich anschließend aus.',
    question: 'Welches Gefühl spürst du in diesem Moment?',
    answers: ['Freude', 'Angst', 'Wut', 'Kummer', 'Ekel'],
  },
  {
    title: 'Mal angenommen...',
    scenario:
      'Du spielst gerade mit deinen Freunden ein Fußballmatch und bist kurz davor, ein Tor zu schießen. In diesem Moment foult dich ein Gegner, um dich an deinem Tor zu hindern und lacht dich anschließend aus.',
    question: 'Welches Gefühl spürst du in diesem Moment?',
    answers: ['Freude', 'Angst', 'Wut', 'Kummer', 'Ekel'],
  },
]
