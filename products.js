const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:String,
    desc:String,
    img:String,
    price:Number,
    qty:Number,
    status:{type:String,default:'IN-STOCK'}
})



module.exports=mongoose.model('product',productSchema)