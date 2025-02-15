const express=require('express');
const router=express.Router();

const eventModel=require('../models/event.model.js');

router.get('/',async(req,res)=>{
    try{
        const events=await eventModel.find();
        res.status(200).send("Event fetched", events);

    }catch(er){
        return res.status(500)
                .send({message:"Internal Server error",er});
    }
})


// getting event by id

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const event=eventModel.findById(id);
        if(!event){
            return res.status(404).send({message:" Event not found", id});
        }

        return res.status(200)
                .send({message: "Event found", event});
        
    }catch(er){
        return res.status(500)
                .send({message: "Internal server error", er})
    }
})


module.exports=router;