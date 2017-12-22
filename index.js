const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3000



app.use(express.static(path.join(__dirname, 'public')))


app.use(cors())

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))