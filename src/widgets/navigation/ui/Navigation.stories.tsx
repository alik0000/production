import { Navigation } from 'widgets/navigation'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'widgets/Navigation',
  component: Navigation,

  argTypes: {},
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Navigation>
const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />

export const NavigationLight = Template.bind({})
NavigationLight.storyName = 'Navigations light'
NavigationLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const NavigationDark = Template.bind({})
NavigationDark.storyName = 'Navigations dark'
NavigationDark.decorators = [ThemeDecorator(Theme.DARK)]
