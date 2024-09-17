const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome, What does your reality tell you about your beliefs`)
})

app.get('*', (req, res) => {
    res.status(404).send(`Internal Server Error`)
})


module.exports = app