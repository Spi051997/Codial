const express=require('express');

const port=8000;
const cookieparser=require('cookie-parser');
const path=require('path');

const app=express();


const db=require('./config/mongoose');

// importing Passport

const session=require('express-session');
const passport=require('passport');
const passportlocal=require('./config/passport-local-storage')


const expresslayouts=require('express-ejs-layouts');
const Mongostore=require('connect-mongo');
// Adding SASS middle ware
const sassMiddleware = require('node-sass-middleware');

// using sassmiddleware in app.use

app.use(sassMiddleware({

    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix:  '/css'
}));

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
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: Mongostore.create({
        mongoUrl: 'mongodb+srv://admin:admin@cluster0.efyft.mongodb.net/Codial?retryWrites=true&w=majority',
        autoRemove:'disabled'
    },(err)=>
    {
        console.log(err || 'Mongo setup error is up!!')
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthticateduser)


// Passport set up is done

app.use('/',require('./routes'));




app.listen(port,()=>console.log(`Server is up :${port}`))