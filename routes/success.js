const express=require('express');
const path=require('path');


const router=express.Router();

router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'));
});

// router.post('/contactUs',(req,res,next)=>{
//     constole.log(req.body);
//     res.redirect('/')
// });

module.exports=router;