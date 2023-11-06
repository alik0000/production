import { createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  username: '',
  password: '',
  loading: false
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    }
  },
})
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
