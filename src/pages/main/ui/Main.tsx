import { useTranslation } from 'react-i18next'
export default function Main (): JSX.Element {
  const { t } = useTranslation('main')

  return (
        <>
            <h2>{t('mainPage.title')}</h2>
            <p>{t('mainPage.text')}</p>
            <br/>
            <br/>
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
