const express=require('express');
const port=8000;

const app=express();

// use express

app.use('/',require('./routes'));


app.listen(port,()=>console.log(`Server is up :${port}`))