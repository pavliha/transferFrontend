import Dexie from 'dexie'
import Faker from 'Faker'
import moment from 'moment'

import relationships from 'dexie-relationships'

const db = new Dexie('expenses', {addons: [relationships]})

// Define a schema
db.version(1).stores({
    categories: 'id,icon,text',
    expenses: '++id,name, category_id -> categories.id,amount,date',
})


const categories = [
    {
        id: 1,
        icon: 'flaticon-piggy-bank',
        text: 'Остальные',
    }, {
        id: 2,
        icon: 'flaticon-wallet',
        text: 'Доход',
    }, {
        id: 3,
        icon: 'flaticon-internet',
        text: 'Напитки',
    }, {
        id: 4,
        icon: 'flaticon-cutlery',
        text: 'Еда',
    }, {
        id: 5,
        icon: 'flaticon-internet',
        text: 'Проезд',
    }, {
        id: 6,
        icon: 'flaticon-home',
        text: 'Аренда дома',
    }, {
        id: 7,
        icon: 'flaticon-home',
        text: 'Кафе',
    }, {
        id: 8,
        icon: 'flaticon-commerce',
        text: 'Покупки',
    }, {
        id: 9,
        icon: 'flaticon-piggy-bank',
        text: 'Сбережения',
    }, {
        id: 10,
        icon: 'flaticon-internet',
        text: 'Онлайн услуги',
    },
    {
        id: 11,
        icon: 'flaticon-piggy-bank',
        text: 'Развлечения',
    },
]

const expenses = [
    {
        name: 'Квартира',
        category_id: 6,
        amount: -3740,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'В копилку',
        category_id: 9,
        amount: -3200,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Челентано',
        category_id: 7,
        amount: -50,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Защитное стекло',
        category_id: 8,
        amount: -61,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Вода',
        category_id: 3,
        amount: -20,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Ель',
        category_id: 3,
        amount: -86,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Варус',
        category_id: 4,
        amount: -176,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Такси',
        category_id: 5,
        amount: -48,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Маршрутка',
        category_id: 5,
        amount: -100,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Бутер',
        category_id: 4,
        amount: -18,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Кино',
        category_id: 1,
        amount: -65,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Каток',
        category_id: 1,
        amount: -190,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Кофе',
        category_id: 3,
        amount: -10,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Сладости',
        category_id: 4,
        amount: -12,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Подарок на работе',
        category_id: 1,
        amount: -60,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Мобильный',
        category_id: 1,
        amount: -65,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Пицца',
        category_id: 4,
        amount: -90,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Дерижабль',
        category_id: 7,
        amount: -90,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Наушники',
        category_id: 8,
        amount: -605,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Шаурма',
        category_id: 4,
        amount: -85,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        name: 'Бумага',
        category_id: 1,
        amount: -100,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }
]


db.on('ready', () => {
    // on('ready') event will fire when database is open but before any
    // other queued operations start executing.
    // By returning a Promise from this event,
    // the framework will wait until promise completes before
    // resuming any queued database operations.
    // Let's start by counting the number of objects in our table.
    return db.categories.count(async (count) => {
        if (count > 0) {
            console.log("Already populated")
            return
        }

        const response = await axios.get('/categories')

        db.transaction('rw', db.categories, () =>
            response.data.forEach((item) =>
                db.categories.add(item)
            )
        )

        console.log("Transaction committed");

    });
});

// Open the database
db.open().catch(error => {
    console.error(error)
})


export default db