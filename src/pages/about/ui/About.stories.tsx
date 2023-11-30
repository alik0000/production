import { ComponentMeta, ComponentStory } from '@storybook/react'
import About from './About'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/About',
  component: About
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = () => <About />

export const AboutLight = Template.bind({})
AboutLight.storyName = 'About light'
AboutLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const AboutDark = Template.bind({})
AboutDark.storyName = 'About dark'
AboutDark.decorators = [ThemeDecorator(Theme.DARK)]
