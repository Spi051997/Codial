const express=require('express');

const userrouter=express.Router();

const userController=require('../controles/user_controlller');

// importing passport

const passport=require('passport');
const usersccr = require('../models/user');
const { Passport } = require('passport/lib');
// const Signincontroer=require('../controles/user_controlller')

// for User page
// console.log('user router is ready')
// below checkauth func is used because it prevents user from diretly looged into profile page
userrouter.use('/profiles',passport.checkauthentiction,userController.profile);

//  for user sign in page
// console.log('Sign up is ready');
userrouter.use('/Signup',userController.Signup);

// for user Sign up  page
// console.log('Sign in  is ready');
userrouter.use('/Signin',userController.Signin);


userrouter.post('/create',userController.create);



userrouter.post('/create-session',passport.authenticate(
    'local',
    {
       failureRedirect:'/user/Signin'
    },

),userController.createsession);








module.exports=userrouter;