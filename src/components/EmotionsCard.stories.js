import React from 'react'
import EmotionsCard from './EmotionsCard'

export default {
  title: 'EmotionsCard',
  component: EmotionsCard,
}

const Template = args => <EmotionsCard {...args} />

export const DefaultEmotionscard = Template.bind({})
DefaultEmotionscard.args = {
  isExpanded: false,
  name: 'Gefühlsname',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
}
