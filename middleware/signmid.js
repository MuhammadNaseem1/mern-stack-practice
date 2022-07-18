const User=require('../models/User')
const bcrypt=require('bcrypt');
const signinMid=async (req,res,next)=>{
    const {Username,Password}=req.body;
    const prod=await User.find({Username: Username, Password: Password})
    if(Object.keys(prod).length==0)
        return res.redirect('/signin')
    next();
}
module.exports={signinMid};