const express=require('express');

const router=express.Router();

const homecontroller=require('../controles/home_controler');
// const usercontroller=require('../controles/user_controlller')

// console.log("route is ready")

// router for home_contrller
//1. The below is home controoler router๐๐
router.get('/',homecontroller.home);

//2. to Load the user controoller->๐๐
//  First the request comes to index.js(main index)-->๐index.js(routes folder file)-->๐request go to  below๐๐
router.use('/user',require('./user'));

router.use('/user',require('./contactroute'));

router.use('/posts',require('./post'))



module.exports=router;