const express=require('express')
const router=express.Router()
const marketPlaceModel=require('../models/marketPlace.model.js')

router.get('/',async (req,res)=>{
    try{
        const items=await marketPlaceModel.find();
        return res.status(200)
                .send({message:"Items found", items});

    }catch(er){
        return res.status(500).send({message:"Internal server error", er })
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const item=await marketPlaceModel.findById(id);
        if (!item){
            return res.status(404).send({message:"Item not found", id});
        }
        return res.status(200)
                .send({message:"Item found", item})
    }catch(er){
        return res.status(500).send({message:"Internal server error", er })
    }
})

module.exports=router;