import React from 'react'
import ButtonExpansion from './ButtonExpansion'

export default {
  title: 'ButtonExpansion',
  component: ButtonExpansion,
}

const Template = args => <ButtonExpansion {...args} />

export const DefaultButtonExpansion = Template.bind({})
DefaultButtonExpansion.args = {
  children: '+',
  isAusgeklappt: false,
}

export const ExpandedButtonExpansion = Template.bind({})
ExpandedButtonExpansion.args = {
  children: '-',
  isAusgeklappt: true,
}
