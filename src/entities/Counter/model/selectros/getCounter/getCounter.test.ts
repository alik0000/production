import { getCounter } from './getCounter'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

const state: SchemaStore = {
  counter: {
    value: 24
  }
}
describe('getCounter', () => {
  test('should return counter', () => {
    expect(getCounter(state)).toEqual({ value: 24 })
  })
})
