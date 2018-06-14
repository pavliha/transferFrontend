/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Cargo {
  all() {
    return Http.get('/cargo')
  }

  paginate({ limit, page }) {
    return Http.get(`/cargo?limit=${limit}&page=${page}`)
  }

  find(id) {
    return Http.get(`/cargo/${id}`)
  }

  create(form) {
    return Http.post('/cargo', form)
  }
}

export default new Cargo()
