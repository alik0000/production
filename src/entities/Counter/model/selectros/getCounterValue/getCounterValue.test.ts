import { SchemaStore } from 'app/providers/store/types/SchemaStore'
import { getCounterValue } from './getCounterValue'

const state: SchemaStore = {
  counter: {
    value: 17
  },
  user: {
    user: {
      name: 'someone',
      password: '4234'
    }
  },
  login: {
    username: 'someone else',
    password: '132kl',
    loading: false
  }
}
describe('getCounterValue', () => {
  test('should return value of counter', () => {
    expect(getCounterValue(state)).toEqual(17)
  })
})
