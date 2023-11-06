import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { SchemaStore } from '../types/SchemaStore'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features'

export const createReduxStore = (initials?: SchemaStore): EnhancedStore => {
  return configureStore<SchemaStore>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initials
  })
}
