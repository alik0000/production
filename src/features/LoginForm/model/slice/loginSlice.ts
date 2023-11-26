import { createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginAsyncThunk } from '../services/login/login'

const initialState: LoginSchema = {
  email: 'user1@user.user',
  password: '',
  loading: false,
  error: undefined
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeUsername: (state, action) => {
      state.email = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncThunk.pending, (state) => {
        state.error = undefined
        state.loading = true
      })
      .addCase(loginAsyncThunk.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        state.error = action.error.message
        // console.log('state: ', state)
        // console.log('reject: ', action)
        state.loading = false
      })
  }
})
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
