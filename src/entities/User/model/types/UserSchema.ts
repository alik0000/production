export interface User {
  username: string
  password: string
  email: string
  token: string
}

export interface UserSchema {
  user: User
  loggedIn: boolean | string
}
