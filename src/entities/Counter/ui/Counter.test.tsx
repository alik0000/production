import { SchemaStore } from 'app/providers/store/types/SchemaStore'
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender'
import { Counter } from './Counter'
import { fireEvent, screen } from '@testing-library/react'

const initials: SchemaStore = {
  counter: {
    value: 88
  }
}
describe('<Counter />', () => {
  beforeEach(() => {
    ComponentRender(<Counter/>, { initials })
  })

  test('should render a component', () => {
    expect(screen.getByTestId('counter')).toHaveTextContent('88')
  })
  test('should increase the value', () => {
    const { getByTestId } = screen

    fireEvent.click(getByTestId('increment'))
    expect(getByTestId('counter')).toHaveTextContent('89')
  })
  test('should decrease the value', () => {
    const { getByTestId } = screen

    fireEvent.click(getByTestId('decrement'))
    expect(getByTestId('counter')).toHaveTextContent('87')
  })
})
