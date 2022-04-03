const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({

    content:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    // inclde the array if ids of al comments in this post
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
},
{
    timestamps:true

});

const Post=mongoose.model('Post',postSchema);

module.exports=Post;