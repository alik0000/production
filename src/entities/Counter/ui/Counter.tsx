import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../modal/counterSlice'
import { SchemaStore } from 'app/providers/store/config/createReduxStore'

export const Counter = (): JSX.Element => {
  const value = useSelector((state: SchemaStore) => state.counter.value)
  const dispatch = useDispatch()

  const increment = (): void => {
    dispatch(counterActions.increment())
  }
  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
        <>
            <h2>value: {value}</h2>
            <br/>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
  )
}
