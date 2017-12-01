const express = require('express')
const app = express()
const cors = require('cors')
const trips = require('./fakeServer/fakeTrips')

app.use(cors())
app.get('/trips', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let {$limit, $skip} = req.query
    $limit = $limit ? parseInt($limit) : 10
    $skip = $skip ? parseInt($skip) : 0
    const ResultTrips = trips.slice($skip, $limit)
    res.json({
        "total": trips.length,
        "limit": $limit,
        "skip": $skip,
        "data": ResultTrips
    })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))