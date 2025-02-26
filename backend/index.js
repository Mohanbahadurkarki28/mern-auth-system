const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRoutes')

require('dotenv').config()
require('./Models/db')

const PORT =  process.env.PORT || 8080;

app.get('/', (req,res) => {
    res.send('Hello You are Welcome !!!')
})

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
