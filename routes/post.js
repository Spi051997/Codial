const express=require('express');


const userrouter=express.Router();
const Passport=require('passport');

// importing post contorller


const Postcontroller=require('../controles/post_cotroller')


userrouter.use('/create',Passport.checkauthentiction,Postcontroller.create);

module.exports=userrouter;
