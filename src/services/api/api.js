import axios from 'axios'
import to from '../to'
import * as user from './user'
import * as cargo from './cargo'
import * as drive from './drive'

export const API_URL = 'https://transfer-api.herokuapp.com'
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token').replace(/^"(.*)"$/, '$1')

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
