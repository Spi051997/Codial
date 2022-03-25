const express=require('express');

const userrouter=express.Router();

const userController=require('../controles/user_controlller');

// const Signincontroer=require('../controles/user_controlller')

// for User page
// console.log('user router is ready')
userrouter.use('/user-profiles',userController.profile);

//  for user sign in page
// console.log('Sign up is ready');
userrouter.use('/Signup',userController.Signup);

// for user Sign up  page
// console.log('Sign in  is ready');
userrouter.use('/Signin',userController.Signin);


userrouter.post('/create',userController.create);


userrouter.post('/create-session',userController.createsession);







module.exports=userrouter;