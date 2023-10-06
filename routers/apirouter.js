const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const productc=require('../controllers/productcontroller')
const multer=require('multer')
const upload=require('../helpers/multer')


router.post('/reg',regc.register)
router.post('/login',regc.loginCheck)
router.post('/addproduct',upload.single('img'),productc.addproduct)
router.get('/allproducts',productc.allproducts)
router.get('/singleproduct/:id',productc.sigleproduct)
router.put('/productupdate/:id',upload.single('productimg'),productc.productupdate)
router.get('/stockproducts',productc.stockproducts)
router.post('/cart',productc.cart)
router.post('/checkout/:username',productc.checkout)
module.exports=router