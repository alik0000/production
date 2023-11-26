import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserSchema, User } from '../types/UserSchema'

const defaultUserState = {
  username: '',
  password: '',
  email: '',
  token: ''
}
const initialState: UserSchema = {
  user: JSON.parse(`${localStorage.getItem('userData')}`) || defaultUserState,
  loggedIn: JSON.parse(`${localStorage.getItem('token')}`) || false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.loggedIn = true
    },
    removeUserData: (state) => {
      state.user = initialState.user
      state.loggedIn = false
      localStorage.removeItem('userData')
      localStorage.removeItem('token')
    }
  }
})
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
