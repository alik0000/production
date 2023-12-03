import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileData, ProfileSchema } from '../types/ProfileSchema'
import { profileAsyncThunk } from '..//services/profileAsyncThunk/profileAsyncThunk'

const initialState: ProfileSchema = {
  data: {
    userName: '',
    firstName: '',
    lastName: '',
    age: 0,
    country: '',
    city: '',
    socials: null
  },
  loading: false
}
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileAsyncThunk.pending, (state) => {
        state.error = undefined
        state.loading = true
      })
      .addCase(profileAsyncThunk.fulfilled, (state, action: PayloadAction<ProfileData>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(profileAsyncThunk.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
