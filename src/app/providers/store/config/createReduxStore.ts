import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { SchemaStore } from '../types/SchemaStore'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features'
import { profileReducer } from 'entities/Profile'
import { $api } from 'shared/config/api/api'
import { To } from '@remix-run/router'
import { NavigateOptions } from 'react-router/dist/lib/context'

interface StoreProps {
  initials?: SchemaStore
  navigate: (to: To, options?: NavigateOptions) => void
}
export const createReduxStore = ({ initials, navigate }: StoreProps): EnhancedStore => {
  return configureStore({
    reducer: {
      user: userReducer,
      login: loginReducer,
      profile: profileReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initials,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate
          }
        }
      })
  })
}
