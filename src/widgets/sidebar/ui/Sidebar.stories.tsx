import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from 'widgets/sidebar'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SidebarLight = Template.bind({})
SidebarLight.storyName = 'Sidebar light'
SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SidebarDark = Template.bind({})
SidebarDark.storyName = 'Sidebar dark'
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
