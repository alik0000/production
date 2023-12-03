import { FC, FormEvent, useCallback } from 'react'
import { Input } from 'shared/ui/input/Input'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'
import { Button } from 'shared/ui/button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getLoginValue } from '../model/selectors/getLoginValues/getLoginValue'
import { loginActions } from '../model/slice/loginSlice'
import { loginAsyncThunk } from '../model/services/loginAsyncThunk/loginAsyncThunk'

export const LoginForm: FC = () => {
  const { t } = useTranslation('auth')
  const dispatch = useDispatch()
  const { email, password, error } = useSelector(getLoginValue)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.changeUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.changePassword(value))
  }, [dispatch])

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginAsyncThunk({ email, password }))
  }, [dispatch, email, password])

  return (
        <form className={s.form} onSubmit={onSubmit}>
            <div className={s.fields}>
                <Input
                    type='email' name='login-email'
                    onChange={onChangeUsername}
                    value={email} placeholder='Введите email'
                    errorMessage={error}
                />
                <Input
                    type='password' onChange={onChangePassword}
                    name='login-password' value={password} placeholder='Введите пароль'
                    errorMessage={error}
                />
            </div>
            <Button type='submit' color='primary' shape='brick' align='right'>{ t('login.enter') }</Button>
        </form>
  )
}
