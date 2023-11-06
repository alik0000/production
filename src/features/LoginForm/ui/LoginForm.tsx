import { FC, useCallback } from 'react'
import { Input } from 'shared/ui/input/Input'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'
import { Button } from 'shared/ui/button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getLoginValue } from '../model/selectors/getLoginValues/getLoginValue'
import { loginActions } from '../model/slice/loginSlice'
import { loginAsyncThunk } from '../model/services/login/login'

export const LoginForm: FC = () => {
  const { t } = useTranslation('auth')
  const dispatch = useDispatch()
  const { username, password } = useSelector(getLoginValue)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.changeUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.changePassword(value))
  }, [dispatch])

  const onClickLogin = useCallback(() => {
    dispatch(loginAsyncThunk({ username, password }))
  }, [dispatch, username, password])

  return (
        <form className={s.form}>
            <div className={s.fields}>
                <Input name='login-username' onChange={onChangeUsername} value={username} placeholder='Введите логин'/>
                <Input type='password' onChange={onChangePassword} name='login-password' value={password} placeholder='Введите пароль'/>
            </div>
            <Button type='button' onClick={onClickLogin} color='primary' shape='brick' align='right'>{ t('login.enter') }</Button>
        </form>
  )
}
