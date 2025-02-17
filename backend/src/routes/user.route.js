const express=require('express');
const router=express.Router();
const userModel=require('../models/user.model.js');

//getting all users

router.get('/',async(req,res)=>{
    try{
        const users=await userModel.find();
        return res.status(200)
                .send({message:'Users found',users});

    }catch(er){
        return res.status(500)
                .send({message:"Internal Server error",er});
    }
})

//getting user with id

router.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findById(id);
        if(!user){
            return res.status(404).send({message: "User not found"});
        }
        return res.status(200).send({message:"User found", user});

    }catch(er){
        return res.status(500)
                .send({message:"Internal Server error",er});
    }
});

//creating a new user

router.post('/create-user',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if (!name || !email || !password){
            return res.status(400)
                    .send({message: "All fields are required"});
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "Email is already registered" });
        }

        const newUser = await userModel.create({
            name:name,
            email:email,
            password:password
        })


        return res.status(201)
                .send({message:"User created successfully", newUser})
        
    }catch(er){
        return res.status(500)
                .send({message:"Internal Server error",er});
    }
})

module.exports=router
