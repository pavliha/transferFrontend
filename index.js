const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))


app.use(cors())

app.get('/api/expenses', (req, res) => {
    res.json({
        limit: 10,
        skip: 0,
        items: [
            {
                "name": "Varus",
                "amount": 200,
            },
            {
                "category": 'Home',
                "name": "Rent",
                "amount": 1000,
            },
            {
                "category": 'Food',
                "name": "Varus",
                "amount": 200,
            },
            {
                "category": 'Food',
                "name": "Varus",
                "amount": 200,
            },
            {
                "category": 'Food',
                "name": "Varus",
                "amount": 200,
            },
        ]
    })
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))