import { Header } from 'widgets/header'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'widgets/Header',
  component: Header,

  argTypes: {},
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Header>
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderLight = Template.bind({})
HeaderLight.storyName = 'Headers light'
HeaderLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const HeaderDark = Template.bind({})
HeaderDark.storyName = 'Headers dark'
HeaderDark.decorators = [ThemeDecorator(Theme.DARK)]
