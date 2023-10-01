const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/upload')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*4}
})

module.exports=upload