const express=require('express');

const port=8000;

const app=express();


const expresslayouts=require('express-ejs-layouts');

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