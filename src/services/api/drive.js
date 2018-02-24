import {post} from "./index"

export const create = async (values) => {

  const [err, response] = await post('/drive/create', values)
  if (err) throw err.response.data

  return response.data
}