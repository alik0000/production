import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User/model/types/UserSchema'
import { userActions } from 'entities/User'

interface LoginProps {
  email: string
  password: string
}
export const loginAsyncThunk = createAsyncThunk<User, LoginProps, { rejectValue: string }>(
  'users/fetchByIdStatus',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('http://localhost:8000/login', authData)
      if (!data) {
        throw new Error('Ошибка')
      }

      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token))
      }
      localStorage.setItem('userData', JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
      return data
    } catch (err) {
      return rejectWithValue(err?.message)
    }
  }
)
