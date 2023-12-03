import { ComponentMeta, ComponentStory } from '@storybook/react'
import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/Main',
  component: MainPage
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const MainLight = Template.bind({})
MainLight.storyName = 'Main light'
MainLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const MainDark = Template.bind({})
MainDark.storyName = 'Main dark'
MainDark.decorators = [ThemeDecorator(Theme.DARK)]
