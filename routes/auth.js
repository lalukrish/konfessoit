const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../keys")
const isAuthorized = require("../middileware/authorization")
 
router.post("/signup", (req, res) => {
  const { name, email, password,role } = req.body;
  if (!email || !password || !name || !role) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  //user is validate with email for duplication

  User.findOne({
    email: email,
  })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with that email" });
      }

      //store the new user with encrypted passwd
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
          role
        });
        user
          .save()
         
          .then((user) => {
            console.log("user",user)
            res.json({ message: "saved sucessfully",user: user });
            
          })
          .catch((err) => {
            console.log(err);
          });
          
      });
     
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res,next) => {
  const {email,password}=req.body
    if(!email || !password){
         return res.status(422).json({error:"please fill all the fields"})
    }
    User.findOne({email:email}).then(savedUser =>{
        if(!savedUser){
         return   res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                
                console.log("user",doMatch)
            const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            const {_id,name,email} = savedUser
            res.json({token,user:{_id,name,email}})
           
            next();
        
            //res.json({token:token})
          
        }   else{
          console.log("user",doMatch)
                return res.status(422).json({error:"invalid email or password"})
            }
        }).catch(err=>{console.log(err)})
    })
})


//logout

router.get("/logout",(req,res,next)=>{
  res.cookie("token",null,
  {
expires:new Date(Date.now()),
httpOnly:true
  })
  res.status(200).json({
    success:true,
    message:"logged out"
  })
})


exports.updateProfile = (async (req, res, next) => {
 const user = await User.findById(req.user._id)
 if(user){
  user.name=req.body.name || user.name
  user.email=req.body.email || user.email
  const updateuser = await updateuser.save()
  res.json({_id:updateuser._id,
    name:updateuser.name,
    email:updateuser.email
  })
  
 }else{
  return res.status(422).json({error:"no user on this routes"})
 }
});




module.exports = router;
