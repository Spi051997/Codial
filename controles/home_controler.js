module.exports.home=(req,res)=>
{

    console.log(req.cookies);
    res.cookie('us',34);

   return res.render('home',{
       title:'Home'
   });
}