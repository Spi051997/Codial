const express=require('express');

const contactrouter=express.Router();

// import contact controller

const contactcontroller=require('../controles/contact');

console.log("Contact router is ready")
contactrouter.use('/contact',contactcontroller.contact);




module.exports=contactrouter;
