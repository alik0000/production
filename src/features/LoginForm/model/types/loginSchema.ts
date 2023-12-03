export interface LoginData {
  email: string
  password: string
}
export interface LoginSchema extends LoginData {
  loading: boolean
  error?: string | undefined
}
