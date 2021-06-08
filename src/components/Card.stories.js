import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  name: 'Freude',
  description:
    'Freude ist denpr Gemütszustand oder die primäre Emotion, die als Reaktion auf eine angenehme Situation oder die Erinnerung an eine solche entsteht. Je nach Intensität äußert sie sich als Lächeln, Lachen, Freudenschrei oder in einem Handeln. Im weiteren Sinne kann auch der Auslöser einer Freude, eine frohe Stimmung oder ein frohes Dasein als Freude bezeichnet werden. Der Begriff Glück wird manchmal im Sinne von Freude verwendet.',
  tags: ['fröhlich', 'lachen', 'glücklich', 'happy'],
  color: '#FDDD5C',
}
