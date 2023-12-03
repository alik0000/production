import { AxiosInstance } from 'axios'
import { To } from '@remix-run/router'
import { NavigateOptions } from 'react-router/dist/lib/context'

export interface ThunkArgs<T> {
  extra: {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void
  }
  rejectWithValue: T
}
