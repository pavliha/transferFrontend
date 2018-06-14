import faker from 'faker'

faker.locale = 'ru'

const cargos = []

for (let i = 1; i <= 10; i++) {
  cargos.push({
    id: i,
    title: 'Коробка с вафлями',
    from: {
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      lat: 42.4140522,
      lng: -71.15078410000001,
      placeId: 'ChIJxY9MM1d244kRpTrdHZadXcQ',
      date: faker.date.recent(),
      time: faker.date.recent(),
    },
    to: {
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      date: faker.date.recent(),
      time: faker.date.recent(),
      lat: 40.420589,
      lng: -3.7068970000000263,
      placeId: 'ChIJwdMPi3woQg0RprFwuLalZYA',
    },
    primary_picture: 'https://picsum.photos/400/400',
    pictures: [
      { url: 'https://picsum.photos/200/200' },
      { url: 'https://picsum.photos/200/200' },
      { url: 'https://picsum.photos/200/200' },
      { url: 'https://picsum.photos/200/200' },
    ],
    weight: faker.random.number(40),
    dimensions: `${faker.random.number(40)}x${faker.random.number(40)}x${faker.random.number(40)}`,
    volume: `${faker.random.number(3)}m³`,
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      `,
    transport_type: faker.random.arrayElement(['легковой', 'грузовой', 'специальный']),
    payment: `${faker.random.number(200)} USD`,
    distance: '240 км',
    crosses_border: true,
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),

    user: {
      id: i,
      avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
      full_name: faker.name.findName(),
      succeeded: faker.random.number(100),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    },
  })
}
export default cargos
