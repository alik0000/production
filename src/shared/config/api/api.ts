import axios from 'axios'

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'production.api'
const headers = {
  authorization: JSON.parse(`${localStorage.getItem('token')}`) || ''
}
export const $api = axios.create({
  baseURL,
  headers
})
