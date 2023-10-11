import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { createReduxStore } from '../config/createReduxStore'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

interface Props {
  children: ReactNode
  initials?: SchemaStore
}
export const StoreProvider = ({ children, initials }: Props): JSX.Element => {
  const store = createReduxStore(initials)
  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
