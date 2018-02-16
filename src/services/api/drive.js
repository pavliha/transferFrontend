import {post} from "./index"
import urlencodeForm from "../urlencodeForm"

export const create = async (form) => {

  const [err, response] = await post('/drive/create', urlencodeForm(form))
  if (err) throw err.response.data

  return response.data
}