import Dexie from 'dexie'
import Faker from 'Faker'
import moment from 'moment'
import relationships from 'dexie-relationships'

const db = new Dexie('expenses', {addons: [relationships]})

// Define a schema
db.version(1).stores({
    expensessss: '++id,name,category_id,amount,date',
    //categories: '++id,icon,text,value',

    categories: 'id, icon,text',
    expenses: 'id, name, category_id -> categories.id',
})


const categories = [
    {
        id: 1,
        icon: 'flaticon-piggy-bank',
        text: 'Развлечения',
    }, {
        id: 2,
        icon: 'flaticon-internet',
        text: 'Онлайн услуги',
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
        icon: 'flaticon-wallet',
        text: 'Доход',
    },
]

const expenses = [
    {
        id: 1,
        name: 'Квартира',
        category_id: 6,
        amount: -3740,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 2,
        name: 'В копилку',
        category_id: 9,
        amount: -3200,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 3,
        name: 'Челентано',
        category_id: 7,
        amount: -50,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 3,
        name: 'Защитное стекло',
        category_id: 8,
        amount: -61,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 4,
        name: 'Вода',
        category_id: 3,
        amount: -20,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 5,
        name: 'Ель',
        category_id: 3,
        amount: -86,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 5,
        name: 'Варус',
        category_id: 4,
        amount: -176,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 6,
        name: 'Такси',
        category_id: 5,
        amount: -48,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 7,
        name: 'Маршрутка',
        category_id: 5,
        amount: -100,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 8,
        name: 'Бутер',
        category_id: 4,
        amount: -18,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 9,
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 10,
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 11,
        name: 'Обед на работе',
        category_id: 4,
        amount: -40,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 11,
        name: 'Кино',
        category_id: 1,
        amount: -65,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 12,
        name: 'Каток',
        category_id: 1,
        amount: -190,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }, {
        id: 13,
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
        amount: -60,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    },
    {
        name: 'Мобильный',
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
        amount: -100,
        date: Faker.Date.between(moment().subtract(10, 'days'), moment())
    }
]

db.on("populate", function () {
    // Genres

    db.categories.bulkPut(categories)

    // Bands
    db.expenses.bulkPut([{
        id: 1,
        name: 'Beatles',
        category_id: 1
    }, {
        id: 2,
        name: 'Abba',
        category_id: 2
    }])


    // db.categories.bulkPut(categories)
    // db.expenses.bulkPut(expenses)

})

// Open the database
db.open().catch(error => {
    debugger
})


export default db