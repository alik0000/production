import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../modal/slice/counterSlice'
import { getCounterValue } from '../modal/selectros/getCounterValue/getCounterValue'

export const Counter = (): JSX.Element => {
  const value = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const increment = (): void => {
    dispatch(counterActions.increment())
  }
  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
        <div>
            <h2 data-testid={'counter'}>{value}</h2>
            <br/>
            <button data-testid={'increment'} onClick={increment}>+</button>
            <button data-testid={'decrement'} onClick={decrement}>-</button>
        </div>
  )
}
