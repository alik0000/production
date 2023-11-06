import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features'
import { UserSchema } from 'entities/User'

export interface SchemaStore {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
}
