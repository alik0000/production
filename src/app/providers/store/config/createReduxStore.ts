import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { SchemaStore } from '../types/SchemaStore'
export const createReduxStore = (initials?: SchemaStore): EnhancedStore => {
  return configureStore<SchemaStore>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initials
  })
}
