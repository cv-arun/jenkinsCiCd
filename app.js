"use strict";

const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const errorHandler = require('./middlewares/errorHandler')
const userRouter = require('./routes/user')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user', userRouter)
app.use(errorHandler)


app.listen(PORT, () => {
    try {
        console.log(`SERVER RUNNING ON PORT ${PORT}`)
    } catch (error) {
        console.log(`ERROR WHILE STARTING SERVER ${error}`)
    }
})
