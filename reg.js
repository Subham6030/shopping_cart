const mongoose=require('mongoose')

const regSchema=mongoose.Schema({
    email:String,
    password:String
})





module.exports=mongoose.model('reg',regSchema)