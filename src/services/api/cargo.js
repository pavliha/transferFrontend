import {request} from "./index"

export const create = async (values) => {
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
  const [err, response] = await request.post('/cargo', data)
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
  const data = response.data.data.find((cargo) => cargo.id === parseInt(id))
  return data
}

const data = {
  name: "Запорожье",
  description: "фывфы фыв",
  from: {
    name: "Запорожская область, Ukraine",
    date: "2018-02-25T16:21:48.657Z",
    lat: 47.8388,
    lng: 35.13956699999994,
    placeId: "ChIJ0U8jLBVn3EARjGp5k7-Oh-E",
  },
  images: ["undefined//home/pavel/Code/transferBackend/public/uploads/1519575718427-WtBPFsHJJbRLKfHjt6JLxe7yWg7MgiAOfXuEXCrR.png.png"],
  price: "23",
  to: {
    name: "Киев, Ukraine",
    date: "2018-02-26T16:21:50.833Z",
    lat: 50.4501,
    lng: 30.523400000000038,
    placeId: "ChIJBUVa4U7P1EAR_kYBF9IxSXY",
  },
  volume: "23",
  weight: "23",
}
