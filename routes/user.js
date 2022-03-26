const express=require('express');

const userrouter=express.Router();

const userController=require('../controles/user_controlller');

// importing passport

const passport=require('passport');
const usersccr = require('../models/user');
// const Signincontroer=require('../controles/user_controlller')

// for User page
// console.log('user router is ready')
userrouter.use('/profiles',userController.profile);

//  for user sign in page
// console.log('Sign up is ready');
userrouter.use('/Signup',userController.Signup);

// for user Sign up  page
// console.log('Sign in  is ready');
userrouter.use('/Signin',userController.Signin);


userrouter.post('/create',userController.create);


// userrouter.post('/create-session',passport.Authenticator(

//     'local',
//     {
//         failureRedirect:'/user/Signin'
//     }
// ),userController.createsession);

userrouter.post('/create-session',passport.authenticate(
    'local',
    {
       failureRedirect:'/user/Signin'
    },

),userController.createsession);








module.exports=userrouter;