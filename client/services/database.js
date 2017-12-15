import Dexie from 'dexie'
import Faker from 'Faker'
import moment from 'moment'

const db = new Dexie('expenses')

// Define a schema
db.version(1).stores({
    expenses: '++id,name,category,amount,date'
})

const categories = [
    {
        icon: 'flaticon-internet',
        text: 'Онлайн услуги',
        value: 'online-service'
    },
    {
        icon: 'flaticon-cutlery',
        text: 'Еда',
        value: 'food'
    },
    {
        icon: 'flaticon-internet',
        text: 'Проезд',
        value: 'transport'
    },
    {
        icon: 'flaticon-home',
        text: 'Аренда дома',
        value: 'home'
    },
    {
        icon: 'flaticon-commerce',
        text: 'Покупки',
        value: 'shop'
    },
    {
        icon: 'flaticon-piggy-bank',
        text: 'Сбережения',
        value: 'savings'
    },
]

db.on("populate", function () {
    for (let i = 0; i < 50; i++)
        db.table('expenses').add({
            name: Faker.Lorem.words(1)[0],
            category: Faker.random.array_element(categories).text,
            amount: Faker.random.number(100),
            date: Faker.Date.between(moment().subtract(1, 'months'), moment())
        })
});


// Open the database
db.open().catch(error => {
    debugger
})


export default db