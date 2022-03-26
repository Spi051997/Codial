 const User=require('../models/user')

module.exports.profile=(req,res)=>
{
    return res.render("user",{
        title:"User"
    })
}


// render Sign_up pages
module.exports.Signup=(req,res)=>
{

    if(req.isAuthenticated())
       {
           return  res.redirect('/user/profiles')
       }
    return res.render("user_sign_up",{
        title:"Sign_up"
    })
}

// render Sign_in pages

module.exports.Signin=(req,res)=>
{
       if(req.isAuthenticated())
       {
           return  res.redirect('/user/profiles')
       }
    return res.render("user_sign_in",{
        title:"Sign_in"
    })
}


module.exports.create=(req,res)=>
{

    if(req.body.password!=req.body.conform_password)
    {
        console.log(User)
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},(err,user)=>
    {
        if(err)
        {
            console.log("Error in finding user in signup")
            return;
        }

        if(!user)
        {
            User.create(req.body,(err,user)=>
            {
                if(err)
                {
                    console.log("Error in  crating the new User");
                    return;
                }

                return res.redirect('/user/Signin');

            })
        }
        else{
            return res.redirect('back');
        }
    })


}

module.exports.createsession=(req,res)=>
{

    return res.redirect('/');

}