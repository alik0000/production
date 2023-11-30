import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotFound } from './NotFound'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export default {
  title: 'pages/NotFound',
  component: NotFound
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = () => <NotFound />

export const NotFoundLight = Template.bind({})
NotFoundLight.storyName = 'NotFound light'
NotFoundLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const NotFoundDark = Template.bind({})
NotFoundDark.storyName = 'NotFound dark'
NotFoundDark.decorators = [ThemeDecorator(Theme.DARK)]
