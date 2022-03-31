const express=require('express');

const router=express.Router();

const homecontroller=require('../controles/home_controler');
// const usercontroller=require('../controles/user_controlller')

// console.log("route is ready")

// router for home_contrller
//1. The below is home controoler router👇👇
router.get('/',homecontroller.home);

//2. to Load the user controoller->👇👇
//  First the request comes to index.js(main index)-->👉index.js(routes folder file)-->👉request go to  below👇👇
router.use('/user',require('./user'));

router.use('/user',require('./contactroute'));

router.use('/posts',require('./post'))



module.exports=router;