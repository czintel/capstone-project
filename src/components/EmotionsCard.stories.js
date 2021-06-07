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
  name: 'Freude',
  description:
    'Freude ist der Gemütszustand oder die primäre Emotion, die als Reaktion auf eine angenehme Situation oder die Erinnerung an eine solche entsteht. Je nach Intensität äußert sie sich als Lächeln, Lachen, Freudenschrei oder in einem Handeln. Im weiteren Sinne kann auch der Auslöser einer Freude, eine frohe Stimmung oder ein frohes Dasein als Freude bezeichnet werden. Der Begriff Glück wird manchmal im Sinne von Freude verwendet.',
  tags: ['fröhlich', 'lachen', 'glücklich', 'happy'],
}
