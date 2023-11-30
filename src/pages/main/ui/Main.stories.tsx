import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from './Main'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = () => <Main />

export const MainLight = Template.bind({})
MainLight.storyName = 'Main light'
MainLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const MainDark = Template.bind({})
MainDark.storyName = 'Main dark'
MainDark.decorators = [ThemeDecorator(Theme.DARK)]
