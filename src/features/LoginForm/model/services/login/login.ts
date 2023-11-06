import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User/model/types/UserSchema'

interface LoginProps {
  username: string
  password: string
}
export const loginAsyncThunk = createAsyncThunk<User, LoginProps, { rejectValue: string }>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:8000/login', authData)
      if (!data) {
        throw new Error()
      }
      return data
    } catch (err) {
      console.log(err)
      thunkAPI.rejectWithValue('Ошибка')
    }
  }
)
