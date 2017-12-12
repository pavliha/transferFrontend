const express = require('express')
const app = express()

app.get('/api/', (req, res) =>{
    res.send()
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))