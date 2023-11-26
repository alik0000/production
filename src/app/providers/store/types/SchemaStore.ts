import { LoginSchema } from 'features'
import { UserSchema } from 'entities/User'

export interface SchemaStore {
  user: UserSchema
  login: LoginSchema
}
