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

  create(values) {
    const data = {
      name: values.name,
      from: {
        name: values.from.description,
        date: values.date_from,
        lat: values.from.location.lat,
        lng: values.from.location.lng,
        placeId: values.from.placeId,
      },
      to: {
        name: values.to.description,
        date: values.date_to,
        lat: values.to.location.lat,
        lng: values.to.location.lng,
        placeId: values.to.placeId,
      },
      pictures: values.upload.map(file => file.response.url),
      price: values.price,
      weight: values.weight,
      volume: values.volume,
      description: values.description,
    }

    return Http.post('/cargo', data)
  }
}

export default new Cargo()
