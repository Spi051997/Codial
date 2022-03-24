const express=require('express');

const port=8000;
const cookieparser=require('cookie-parser');

const app=express();


const db=require('./config/mongoose');


const expresslayouts=require('express-ejs-layouts');


// parser 
app.use(express.urlencoded());
// use of cookie parser
app.use(cookieparser());
// import assets folder using below 👇
app.use(express.static('./assets'))
//  use express layouts
app.use(expresslayouts);

// use express

app.use('/',require('./routes'));


// set the view enginee
app.set("view engine","ejs");
app.set('views','./views')





app.listen(port,()=>console.log(`Server is up :${port}`))