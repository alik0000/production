import { addDecorator } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { I18nextDecorator } from 'shared/config/storybook/decorators/I18nextDecorator'
import { Theme } from 'app/providers/theme/lib/ThemeContext'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
addDecorator(StoreDecorator)
addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(I18nextDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
