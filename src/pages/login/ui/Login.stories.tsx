import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Login } from './Login'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/LoginForm',
  component: Login
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const LoginLight = Template.bind({})
LoginLight.storyName = 'Login light'
LoginLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LoginDark = Template.bind({})
LoginDark.storyName = 'Login dark'
LoginDark.decorators = [ThemeDecorator(Theme.DARK)]
