const express=require('express');
const router=express.Router();
const userModel=require('../models/user.model.js');

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

module.exports=router
