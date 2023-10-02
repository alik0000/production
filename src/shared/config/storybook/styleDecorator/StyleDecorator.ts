import 'styles/app.scss'
import { type Story } from '@storybook/react'

export const StyleDecorator = (story: () => Story): Story => story()
