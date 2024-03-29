require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConfig')
const mongoose = require('mongoose')

// initialize on express object
const app = express()

// for json data
app.use(express.json())
//db config
connectDB()

//register routers
app.use('/api/register', require('./routers/auth/register'))

//port
const PORT = process.env.PORT || 5890

//connect
mongoose.connection.once('open', ()=>{
    console.log(`Database connected`)
    
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`)
    }) 
})