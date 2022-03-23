const express=require('express');

const router=express.Router();

const homecontroller=require('../controles/home_controler');


console.log("route is ready")

router.get('/',homecontroller.home)



module.exports=router;