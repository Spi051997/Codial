// importing post

const Post=require('../models/post');

module.exports.create=(req,res)=>
{

    Post.create({

        content:req.body.content,
        user:req.user._id
},(err,post)=>
{
    if(err)
    {
        console.error("error in creating  post");
        return;
    }

     return res.redirect('back');
}



)

}