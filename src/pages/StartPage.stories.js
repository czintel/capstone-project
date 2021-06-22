import StartPage from './StartPage'

export default {
  title: 'Pages/StartPage',
  component: StartPage,
}

const Template = args => <StartPage {...args} />

export const Default = Template.bind({})
Default.args = {}
