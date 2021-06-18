import NavButton from './NavButton'

export default {
    title: 'NavButton',
    component: NavButton
}
      
const Template = args => <NavButton {...args} />
  
export const Default = Template.bind({})
Default.args = {}
          