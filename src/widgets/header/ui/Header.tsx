import { FC, useState } from 'react'
import s from './Header.module.scss'
import User from 'shared/assets/user.svg'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button/Button'

export const Header: FC = () => {
  const [isLogin] = useState(true)
  const { t } = useTranslation('auth')

  return (
        <header className={s.header}>
            {
                isLogin
                  ? <>
                        <Button <'a'> href={'/logout'} color='primary' shape='pill'>{ t('logout.title') }</Button>
                        <User className={s.avatar}/>
                    </>
                  : <>
                        <Button <'a'> href={'/register'} color='primary' shape='pill'>{ t('register.enter') }</Button>
                        <Button <'a'> href={'/login'} color='primary' shape='pill'>{ t('login.enter') }</Button>
                    </>
            }
        </header>
  )
}
