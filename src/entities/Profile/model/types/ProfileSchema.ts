interface Socials {
  name: string
  link: string
}

export interface ProfileData {
  userName: string
  firstName: string
  lastName: string
  age: number
  country: string
  city: string
  socials: Socials | null
}
export interface ProfileSchema {
  data: ProfileData
  loading: boolean
  error?: string | undefined
}
