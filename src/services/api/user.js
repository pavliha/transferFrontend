import {request} from "./index"
import urlencodeForm from "../urlencodeForm"
import JWT from "jwt-decode"

const rememberUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}
const rememberToken = (response) => {
  localStorage.setItem('token', response.token)
  localStorage.setItem('refreshToken', response.refreshToken)
}


export const register = async (form) => {

  const [err, response] = await request.post('/register', urlencodeForm(form))
  if (err) throw err.response.data
  const user = JWT(response.data.token).data

  rememberUser(user)

  rememberToken(response.data)

  return user
}

export const login = async (form) => {

  const [err, response] = await request.post('/login', urlencodeForm(form))
  if (err) throw err.response.data

  const user = JWT(response.data.token).data

  rememberUser(user)
  rememberToken(response.data)

  return user
}

export const logout = async () => {
  localStorage.clear()
  // const [err, response] = await request.post('/logout')
  // if (err) throw err.response.data
  // return response.data
}


export const update = async (form) => {
  const [err, response] = await request.put('/user/' + get().id, urlencodeForm(form))
  if (err) throw err.response.data
  return JWT(response.data.token).data
}

export const updatePassport = async (form) => {
  const [err, response] = await request.put('/user/' + get().id, urlencodeForm(form))
  if (err) throw err.response.data
  return JWT(response.data.token).data
}

export const get = () => {
  return JWT(localStorage.getItem('token')).data
}