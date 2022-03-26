const express=require('express');

const port=8000;
const cookieparser=require('cookie-parser');

const app=express();


const db=require('./config/mongoose');

// importing Passport

const session=require('express-session');
const passport=require('passport');
const passportlocal=require('./config/passport-local-storage')


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

// app.use('/',require('./routes'));


// set the view enginee
app.set("view engine","ejs");
app.set('views','./views')


// setting middleware for passport

app.use(session({
    name:'codial',
    // to do change the secret before the deployment in production
    secret:'xxxxxxx',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthticateduser)


// Passport set up is done

app.use('/',require('./routes'));




app.listen(port,()=>console.log(`Server is up :${port}`))