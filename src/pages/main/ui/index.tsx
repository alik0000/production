import { useTranslation } from 'react-i18next'
export default function MainPage() {
    const { t } = useTranslation('main')

    return(
        <>
            <h2>{t('mainPage.title')}</h2>
            <p>{t('mainPage.text')}</p>
        </>
    )
}
