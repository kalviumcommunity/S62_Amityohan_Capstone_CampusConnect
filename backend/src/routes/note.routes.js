const express=require('express')
const router=express.Router()

const noteModel=require('../models/note.model.js')

router.get("/", async(req,res)=>{
    try{
        const notes=noteModel.find();
        res.status(200)
        .send({message:"Notes fetched successfully", notes})
    
    }catch(er){
        res.status(500)
        .send({message:"Error fetching notes", er})
    }
})

router.get(":/id", async(req,res)=>{
    try{
        const {id}=req.params;
        const note=noteModel.findById(id);
        if(!note){
            return res.status(404).send({message:"Note not found",id})
        }
        
        res.status(200)
        .send({message:"Note fetched successfully", note})


    }catch(er){
        res.status(500)
        .send({message:"Internal server error", er})
    }
})


module.exports=router;