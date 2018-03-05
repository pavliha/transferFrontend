import axios from 'axios'
import to from '../to'
import * as user from './user'
import * as cargo from './cargo'
import * as drive from './drive'

// export const LOCAL_API_URL = 'http://localhost:3333'
// export const API_URL = LOCAL_API_URL
export const API_URL = 'https://transfer-api.herokuapp.com'


const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  return "Bearer " + token.replace(/^"(.*)"$/, '$1')
}
if (getToken()) axios.defaults.headers.common['Authorization'] = getToken()

const get = async (url) => await to(axios.get(API_URL + url))
const post = async (url, data) => await to(axios.post(API_URL + url, data))
const put = async (url, data) => await to(axios.put(API_URL + url, data))

const request = {get, post, put}

export {
  request,
  user,
  cargo,
  drive
};
