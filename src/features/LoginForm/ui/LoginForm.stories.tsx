import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'features/LoginForm',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const LoginFormLight = Template.bind({})
LoginFormLight.storyName = 'LoginForm light'
LoginFormLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LoginFormDark = Template.bind({})
LoginFormDark.storyName = 'LoginForm dark'
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)]
