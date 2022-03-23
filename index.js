const express=require('express');

const port=8000;

const app=express();

// use express

app.use('/',require('./routes'));


// set the view enginee
app.set("view engine","ejs");
app.set('views','./views')





app.listen(port,()=>console.log(`Server is up :${port}`))