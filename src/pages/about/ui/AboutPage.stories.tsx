import { ComponentMeta, ComponentStory } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/About',
  component: AboutPage
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const AboutLight = Template.bind({})
AboutLight.storyName = 'About light'
AboutLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const AboutDark = Template.bind({})
AboutDark.storyName = 'About dark'
AboutDark.decorators = [ThemeDecorator(Theme.DARK)]
