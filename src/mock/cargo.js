import faker from 'faker'

const cargos = []

for (let i = 1; i <= 10; i++) {
  cargos.push({
    id: i,
    title: 'Коробка с вафлями',
    from: `${faker.address.streetAddress()}, ${faker.address.city()}`,
    to: `${faker.address.streetAddress()}, ${faker.address.city()}`,
    time: faker.date.recent(),
    date_from: faker.date.recent(),
    date_to: faker.date.recent(),
    primary_picture: 'https://picsum.photos/400/400',
    pictures: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
    weight: faker.random.number(40),
    dimensions: `${faker.random.number(40)}x${faker.random.number(40)}x${faker.random.number(40)}`,
    volume: `${faker.random.number(3)}㎡`,
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    transport_type: faker.random.arrayElement(['легковой', 'грузовой', 'специальный']),
    payment: `${faker.random.number(200)} USD`,
  })
}
export default cargos
