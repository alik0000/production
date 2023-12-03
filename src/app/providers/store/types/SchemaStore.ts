import { LoginSchema } from 'features'
import { UserSchema } from 'entities/User'
import { ProfileSchema } from 'entities/Profile'

export interface SchemaStore {
  user: UserSchema
  login: LoginSchema
  profile: ProfileSchema
}
