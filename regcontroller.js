const Reg=require('../models/reg')
const bcrypt=require('bcrypt')


exports.register= async(req,res)=>{
    //console.log(req.body)
    const{email,password}=req.body
    const convertedpassword=await bcrypt.hash(password,10)
   // console.log(convertedpassword)
   const userCheack=await Reg.findOne({email:email})
   //console.log(userCheack)
   try{
    if(userCheack==null){
    const record=new Reg({email:email,password:convertedpassword})
    record.save()
    //console.log(record)
    res.json({
        status:201,
        apiData:record,
        message:"Registered Successfully"
    })
}else{
    res.json({
        status:"400",
        message:`"${email}" Email is already taken.`
    })
}
   }catch(error){
    res.json({
        status:400,
        message:error.message
    })
   }
}


exports.loginCheck=async(req,res)=>{
    //console.log(req.body)
    const {email , password}= req.body
    try{
   const record= await Reg.findOne({email:email})
   //console.log(record)
   if(record!==null){
    const passwordcheck= await bcrypt.compare(password,record.password)
    if(passwordcheck){
    //console.log(passwordcheck)
    res.json({
        status:200,
        apiData:record.email,
       // message:'Login Successful'
    })
   }else{
    res.json({
        status:400,
        message:'Wrong password'
    })
   }
}
   else{
    res.json({
        status :400,
     message :"Invalid Email_id."
    })
   }
}catch(error){
    res.json({
        status:400,
        message:error.message
    })

}
}