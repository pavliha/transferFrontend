const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))


app.use(cors())

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/expenses', (req, res) => {
    res.json({
        limit: 10,
        skip: 0,
        items: [
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
            }, {
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
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))