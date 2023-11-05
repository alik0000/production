import { FC } from 'react'
import { Input } from 'shared/ui/input/Input'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'
import { Button } from 'shared/ui/button/Button'

export const LoginForm: FC = () => {
  const { t } = useTranslation('auth')

  return (
        <form className={s.form}>
            <div className={s.fields}>
                <Input name='login-username' placeholder='Введите логин'/>
                <Input type='password' name='login-password' placeholder='Введите пароль'/>
            </div>
            <Button type='submit' color='primary' shape='brick' align='right'>{ t('login.enter') }</Button>
        </form>
  )
}
