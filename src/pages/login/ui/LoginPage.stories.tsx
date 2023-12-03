import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoginPage } from './LoginPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/LoginForm',
  component: LoginPage
} as ComponentMeta<typeof LoginPage>

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />

export const LoginLight = Template.bind({})
LoginLight.storyName = 'Login light'
LoginLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LoginDark = Template.bind({})
LoginDark.storyName = 'Login dark'
LoginDark.decorators = [ThemeDecorator(Theme.DARK)]
