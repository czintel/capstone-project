import React from 'react'
import QuizCard from './QuizCard'

export default {
  title: 'QuizCard',
  component: QuizCard,
}

const Template = args => <QuizCard {...args} />

export const DefaultLearningCard = Template.bind({})
DefaultLearningCard.args = {
  title: 'Stell dir vor...',
  scenario:
    'Du spielst gerade mit deinen Freunden ein Fußballmatch und bist kurz davor, ein Tor zu schießen. In diesem Moment foult dich ein Gegner, um dich an deinem Tor zu hindern und lacht dich anschließend aus.',
  question: 'Welches Gefühl spürst du in diesem Moment?',
  answers: [
    { answer: 'Freude', isCorrect: false },
    { answer: 'Angst', isCorrect: false },
    { answer: 'Wut', isCorrect: true },
    { answer: 'Kummer', isCorrect: false },
    { answer: 'Ekel', isCorrect: false },
  ],
}
