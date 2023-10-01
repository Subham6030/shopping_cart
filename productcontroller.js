const { json } = require('express')
const Product=require('../models/products')

exports.addproduct=(req,res)=>{
    //console.log(req.body)
    //console.log(req.file)
    const{name,desc,price,qty}=req.body
    const imagename=req.file.filename
    try{
       const record= new Product({name:name,desc:desc,img:imagename,price:price,qty:qty})
        record.save()
        res.json({
            status:201,
            message:"Product Added Successfully"
        })
    }catch(error){
        res.json({
            status:400,
            message:error.message
        })
    }
}


exports.allproducts=async(req,res)=>{
    try{
   const record= await Product.find()
   res.json({
    status:200,
    apiData:record
   })
    }catch(error){
        res.json({
            status:500,
            message:error.message
        })
    }
}

exports.sigleproduct=async(req,res)=>{
    try{
    //console.log(req.params.id)
    const id=req.params.id
    const record=await Product.findById(id)
    //console.log(record)
    res.json({
        status:200,
        apiData:record
    })
    }catch(error){
        res.json({
            status: 500,
            message : error.message
        })
    }

}


exports.productupdate=async(req,res)=>{
   // console.log(req.body)
   // console.log(req.params.id)
   // console.log(req.file)
    const{name,desc,price,qty,status}=req.body
    const id=req.params.id
    try{
    if(req.file){
    const filename=req.file.filename
    await Product.findByIdAndUpdate(id,{name:name,desc:desc,img:filename,price:price,qty:qty,status:status})
    }else{
        await Product.findByIdAndUpdate(id,{name:name,desc:desc,price:price,qty:qty,status:status})
    }
    res.json({
        status:200,
        message:'Successfully Updated'
    })
    }catch(error){
        res.json({
            status:400,
            message:error.message
        })
    }
}



exports.stockproducts=async(req,res)=>{
    try{
    const record=await Product.find({status:'IN-STOCK'})
    res.json({
        status:200,
        apiData:record
    })
    }catch(error){
        res.json({
            status: 500,
            message:error.message
        })
    }
}


exports.cart=async(req,res)=>{
    try{
   //console.log(req.body)
   const{ids}=req.body
   const record=await Product.find({_id:{$in:ids}})
   res.json({
    status:200,
    apiData:record
   })
    }catch(error){
        res.json({
            status :  500 ,
            message: error.message
        })
    }
}


exports.checkout=(req,res)=>{
    console.log(req.body)
    console.log(req.params.username)
}