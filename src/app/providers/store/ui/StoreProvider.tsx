import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { createReduxStore } from '../config/createReduxStore'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
  initials?: SchemaStore
}
export const StoreProvider = ({ children, initials }: Props): JSX.Element => {
  const navigate = useNavigate()
  const store = createReduxStore({
    initials,
    navigate
  })

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
