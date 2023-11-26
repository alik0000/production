import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { SchemaStore } from '../types/SchemaStore'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features'

export const createReduxStore = (initials?: SchemaStore): EnhancedStore => {
  return configureStore<SchemaStore>({
    reducer: {
      user: userReducer,
      login: loginReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initials
  })
}
