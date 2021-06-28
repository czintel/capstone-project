import SettingsPage from './SettingsPage'

export default {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
}

const Template = args => <SettingsPage {...args} />

export const Default = Template.bind({})
Default.args = {}
