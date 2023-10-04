import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import s from './NotFound.module.scss'

export const NotFound: FC = () => {
  const { t } = useTranslation('notFound')
  return (
        <div className={s.notFound}>
            <div className={s.code}>404</div>
            <div className={s.context}>
                <h2 className={s.h2}>{t('notFound.title')}</h2>
                <p className={s.text}>{t('notFound.message')}</p>
            </div>
        </div>
  )
}
