module.exports.profile=(req,res)=>
{
    return res.render("user",{
        title:"User"
    })
}


// render Sign_up pages
module.exports.Signup=(req,res)=>
{
    return res.render("user_sign_up",{
        title:"Sign_up"
    })
}

// render Sign_in pages

module.exports.Signin=(req,res)=>
{
    return res.render("user_sign_in",{
        title:"Sign_in"
    })
}


module.exports.create=(req,res)=>
{
    // to do later
}

module.exports.create=(req,res)=>
{

}