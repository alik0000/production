import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'entities/User/model/types/UserSchema'
import { userActions } from 'entities/User'
import { ThunkArgs } from 'app/providers/store/types/AsyncThunk'
import { LoginData } from '../../types/loginSchema'

export const loginAsyncThunk = createAsyncThunk<User, LoginData, ThunkArgs<string>>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI
    try {
      const { data } = await extra.api.post('/login', authData)
      if (!data) {
        throw new Error('Ошибка')
      }

      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token))
      }
      localStorage.setItem('userData', JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
      extra.navigate('/')
      return data
    } catch (err) {
      return rejectWithValue(err?.message)
    }
  }
)
