import { SchemaStore } from 'app/providers/store/types/SchemaStore'
import { getCounterValue } from './getCounterValue'

const state: SchemaStore = {
  counter: {
    value: 17
  }
}
describe('getCounterValue', () => {
  test('should return value of counter', () => {
    expect(getCounterValue(state)).toEqual(17)
  })
})
