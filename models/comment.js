const mongoose=require('mongoose');

const commentschema=new mongoose.Schema({

    content:{
        type:String,
        required:true
    },

    //comeemnt belongs to user
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
  },

  post:
  {
   type:mongoose.Schema.Types.ObjectId,
   ref:'Post'   
  }
},
{
    timestamps:true
});

const comment=mongoose.model('Comment',commentschema);

module.exports=comment;