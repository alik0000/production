import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import testI18n from 'shared/config/i18n/testI18n'
import { render } from '@testing-library/react'
export function RenderWithTranslation (component: ReactNode): ReactNode {
  return render(
        <I18nextProvider i18n={testI18n}>
            {component}
        </I18nextProvider>
  )
}
