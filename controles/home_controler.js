const Post=require('../models/post')
module.exports.home=(req,res)=>
{

    // console.log(req.cookies);
    // res.cookie('us',34);
    
    // Post.find({},(err,posts)=>
    //     {
    //         if(err)
    //         {
    //             console.log("error in home post");
    //             return;
    //         }

    //         return res.render('home',{
    //             title:'Home',
    //             posts:posts
    //         })

    //     })

// using populate  functio to show user detial  on post

    Post.find({}).populate('user').exec((err,posts)=>
    {
        if(err)
        {
            console.error('Error while fetching user post data');
            return;
        }
        return res.render('home',{
            title:'Home',
            posts:posts
        })
    });

}