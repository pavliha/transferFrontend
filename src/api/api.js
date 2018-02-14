import axios from 'axios'
import urlencodeForm from "../services/urlencodeForm";
import JWT from "jwt-decode";
import to from '../services/to'

export const API_URL = 'https://transfer-api.herokuapp.com'
export const get = async (url) => await to(axios.get(API_URL + url,
  {
    headers: {
      "Authorization": getToken()
    }
  }))
export const post = async (url, data) => await to(axios.post(API_URL + url, data))
export const put = async (url, data) => await to(axios.put(API_URL + url, data))

export const getUserCargos = async () => {
  const [err, response] = await get('/cargo')
  if (err) throw err.response.data
  return response.data
}

export const registerUser = async (form) => {

  const [err, response] = await post('/register', urlencodeForm(form))
  if (err) throw err.response.data
  const user = JWT(response.data.token).data

  rememberUser(user)

  rememberToken(response.data)

  return user
}

export const loginForm = async (form) => {

  const [err, response] = await post('/login', urlencodeForm(form))
  if (err) throw err.response.data

  const user = JWT(response.data.token).data

  rememberUser(user)
  rememberToken(response.data)


  return user
}

export const getSavedUser = () => {
  return JWT(localStorage.getItem('token')).data
}

const rememberUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}
const rememberToken = (response) => {
  debugger
  localStorage.setItem('token', response.token)
  localStorage.setItem('refreshToken', response.refreshToken)
}
const getToken = () => "Bearer " + localStorage.getItem('token').replace(/^"(.*)"$/, '$1')


export const createCargo = async (form) => {

  const [err, response] = await post('/cargo', urlencodeForm(form))
  if (err) throw err.response.data

  return response.data
}

export const createDriveForm = async (form) => {

  const [err, response] = await post('/drive/create', urlencodeForm(form))
  if (err) throw err.response.data

  return response.data
}

export const updateUser = async (form) => {
  const [err, response] = await put('/user/' + getSavedUser().id, urlencodeForm(form))
  if (err) throw err.response.data
  const user = JWT(response.data.token).data

  rememberUser(user)

  rememberToken(response.data)

  return user
}

export const getUserCargo = async (id) => {
  const [err, response] = await get('/cargo')
  if (err) throw err.response.data

  return response.data.data.find((cargo) => cargo.id === parseInt(id))
}