import { useTranslation } from 'react-i18next'

export default function About (): JSX.Element {
  const { t } = useTranslation('about')
  return (
        <>
            <h2>{t('aboutPage.title')}</h2>
            <p>{t('aboutPage.text')}</p>
        </>
  )
}
