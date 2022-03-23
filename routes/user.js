const express=require('express');

const userrouter=express.Router();

const userController=require('../controles/user_controlller');


console.log('user router is ready')
userrouter.use('/profiles',userController.profile);






module.exports=userrouter;