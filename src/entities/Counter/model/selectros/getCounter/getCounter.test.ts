import { getCounter } from './getCounter'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

const state: SchemaStore = {
  counter: {
    value: 24
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
describe('getCounter', () => {
  test('should return counter', () => {
    expect(getCounter(state)).toEqual({ value: 24 })
  })
})
