import NavButton from './NavButton'

export default {
  title: 'NavButton',
  component: NavButton,
}

const Template = args => <NavButton {...args} />

export const ActiveNavButton = Template.bind({})
ActiveNavButton.args = {
  children: 'Lernen',
  isActive: true,
}

export const InactiveButton = Template.bind({})
InactiveButton.args = {
  children: 'Quiz',
  isActive: false,
}
