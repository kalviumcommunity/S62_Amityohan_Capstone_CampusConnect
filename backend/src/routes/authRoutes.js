const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const User=require('../models/user.model.js');

const router=express.Router();
const JWT_SECRET=process.env.JWT_SECRET;

router.post("/register", async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        
        let user=await UserModel.findOne({email});
        if(!user){
            return res.status(400).send({message:"User already exists"});
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        user=new User({name, email, password:hashedPassword})
        await user.save();

        res.send({message:"User registered successfully"});
        
    }catch(er){
        return res.status(500).send({message:"Internal server error", error: er.message})
    }
});  

router.post('/login', async(req,res)=>{
    try{
        const {email,password}=req.body;
        
        let user =User.find(u=>u.email==email && u.password==password);
        if(!user){
            return res.status(400).send({message:"Invalid credentials"});
        }

        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({message:"Invalid credentials"});
        }

        const token=jwt.sign({userId:user._id}, JWT_SECRET, {expiresIn:"1h"});
        
        res.cookie('token', token,{
            httpOnly:true,
            secure: process.env.NODE_ENV==='production',
            sameSite:'Strict',
            maxAge: 3*3600000 // 1 hour in milliseconds
        })
        res.send({token, userId: user._id});

    }catch(er){

        return res.status(500).send({message:"Internal server error", error:er.message})
    }
})

module.exports=router;
