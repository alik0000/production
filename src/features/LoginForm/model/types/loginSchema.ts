export interface LoginSchema {
  email: string
  password: string
  loading: boolean
  error?: string | undefined
}
