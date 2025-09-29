import UserModel from "../models/User.js";
import jwt from "jsonwebtoken"
 const RegisterUser = async(req,res)=>{
const { email , password } = req.body;
try{
const isAlreadyExists = await UserModel.findOne({email});
if(isAlreadyExists.length >= 1){
   return res.json({
        message : "User Already Exists!😭",
        success : false,
    });
}
const User = await UserModel.create({
    email,
    password,
});
res.status(200).json({
    message : "User Created Successfully 🥳",
    success : true,
})
}catch(err){
    console.log(err);
}
}

 const LoginUser = async(req, res)=>{
    const {email , password} = req.body;
    try{
    const isUserExists = await UserModel.findOne({email});
    if(!isUserExists){ 
        res.status(400).json({message : "User Didn't exists 😭",success : false});
    }
    const passValid = password == isUserExists.password;
    if(!passValid){ 
        res.status(400).json({message : "Password Invalid! 🤔",success : false});
    }else{

     const token = await jwt.sign({email},'TOKEN',{
        expiresIn : "7d",
        
     });
         res.cookie("Token",token,{
              httpOnly: true,
  secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
         });
   
    }
            res.json({
            message : "Login Successfully 🥳",
            success : true,
        });
}catch(err){
    console.log(err);
}
}

export {RegisterUser , LoginUser}