const express=require('express');

const userrouter=express.Router();

// importing post contorller


const Postcontroller=require('../controles/post_cotroller')


userrouter.use('/create',Postcontroller.create);

module.exports=userrouter;
