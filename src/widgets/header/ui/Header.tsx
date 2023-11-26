import { FC, useCallback } from 'react'
import s from './Header.module.scss'
import User from 'shared/assets/user.svg'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button/Button'
import { loggedIn, userActions } from 'entities/User'
import { useSelector, useDispatch } from 'react-redux'

export const Header: FC = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(loggedIn)
  const { t } = useTranslation('auth')

  const logout = useCallback(() => {
    dispatch(userActions.removeUserData())
  }, [dispatch])

  return (
        <header className={s.header}>
            {
                isLoggedIn
                  ? <>
                        <Button type='button' onClick={logout} color='primary' shape='pill'>{ t('logout.title') }</Button>
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
