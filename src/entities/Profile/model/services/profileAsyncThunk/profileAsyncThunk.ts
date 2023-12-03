import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileData } from '../../types/ProfileSchema'
import { ThunkArgs } from 'app/providers/store/types/AsyncThunk'

export const profileAsyncThunk = createAsyncThunk<ProfileData, null, ThunkArgs<string>>(
  'profile/fetchByIdStatus',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.get<ProfileData>('/profile')

      if (!data) {
        throw new Error('Ошибка')
      }

      return data
    } catch (err) {
      return rejectWithValue('err?.message')
    }
  }
)
