import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginForm } from 'features'
import s from './Login.module.scss'
import { AppLink } from 'shared/ui/app-link/AppLink'

export const Login: FC = () => {
  const { t } = useTranslation('auth')

  return (
        <div className={s.login}>
            <div className={s.container}>
                <header className={s.header}>
                    <h2 className={s.h2}>{ t('login.title') }</h2>
                </header>
                <LoginForm/>
                <AppLink to='/' className={s.link}>{ t('recovery.linkText') }</AppLink>
            </div>
        </div>
  )
}
