const express=require('express')
const app=express()
app.use(express.json())
require('dotenv').config()// . env file you can use here
app.use(express.urlencoded({extended:false}))

const apiRouter=require('./routers/apirouter')
const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)





app.use(express.static('public'))

app.use('/api',apiRouter)

app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})