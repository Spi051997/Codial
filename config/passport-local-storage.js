const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user')


passport.use(new LocalStrategy({

    usernameField:'email'
},
   (email,password,done)=>
   {
      User.findOne({email:email},(err,user)=>
      {
          if(err)
          {
              console.log("Error in finding the user");
              return done(err)
          }

          if(!user || user.password!=password)
          {
              console.log("Password not  found");
              return done(null,false);
          }

          return  done(null,user);
      })
   }



));

// serializer the user to decide which key is to be kept

passport.serializeUser((user,done)=>
{
  done(null,user.id);
});





// deserlizer the user  from the key in the cookies


passport.deserializeUser((id,done)=>
{
    User.findById(id,(err,user)=>
    {
        if(err)
        {
           console.log("Error in fiding the usre");
           return;
        }
        return done(null,user);
    })
})


module.exports=passport;