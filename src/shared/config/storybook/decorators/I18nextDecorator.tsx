import { Story } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import config from 'shared/config/i18n/i18n'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/pag-loader'

export const I18nextDecorator: Story = (StoryComponent: Story) => {
  return (
      <Suspense fallback={<PageLoader/>}>
          <I18nextProvider i18n={config}>
                <StoryComponent/>
          </I18nextProvider>
      </Suspense>
  )
}
