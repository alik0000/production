import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, CounterSchema } from 'entities/Counter/modal/counterSlice'

export interface SchemaStore {
  counter: CounterSchema
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createReduxStore = (initials?: SchemaStore) => {
  return configureStore<SchemaStore>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initials
  })
}
