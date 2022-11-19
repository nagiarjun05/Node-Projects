const express=require('express');
const router=express.Router();
const productControllers=require('../controllers/product')

router.get('/add-product',productControllers.getAddProducts);

router.post('/add-product',productControllers.postAddPrducts);

module.exports=router; 