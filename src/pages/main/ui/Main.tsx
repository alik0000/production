import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'
export default function Main (): JSX.Element {
  const { t } = useTranslation('main')

  return (
        <>
            <h2>{t('mainPage.title')}</h2>
            <p>{t('mainPage.text')}</p>
            <br/>
            <Counter/>
            <br/>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
            <p>{t('mainPage.text')}</p>
        </>
  )
}
