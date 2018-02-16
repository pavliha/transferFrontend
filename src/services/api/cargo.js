import {request} from "./api"
import urlencodeForm from "../urlencodeForm"

export const create = async (form) => {

  const [err, response] = await request.post('/cargo', urlencodeForm(form))
  if (err) throw err.response.data

  return response.data
}

export const all = async () => {
  const [err, response] = await request.get('/cargo')
  if (err) throw err.response.data
  return response.data
}


export const find = async (id) => {
  const [err, response] = await request.get('/cargo')
  if (err) throw err.response.data

  return response.data.data.find((cargo) => cargo.id === parseInt(id))
}
