import * as API from '../../../services/api/index'

export const GET_DRIVES = 'GET_DRIVES'
export const CREATE_DRIVES = 'CREATE_DRIVES'

export const getDrives = () => ({
  type: GET_DRIVES,
  payload: API.cargo.all()
})

export const createDrive = (values) => ({
  type: CREATE_DRIVES,
  payload: API.drive.create(values)
})