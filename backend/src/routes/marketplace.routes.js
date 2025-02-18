const express=require('express')
const router=express.Router()
const marketPlaceModel=require('../models/marketPlace.model.js');
const { estimatedDocumentCount } = require('../models/user.model.js');

//getting all the items

router.get('/',async (req,res)=>{
    try{
        const items=await marketPlaceModel.find();
        return res.status(200)
                .send({message:"Items found", items});

    }catch(er){
        return res.status(500).send({message:"Internal server error", er })
    }
})

//getting an id through it's id

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

//adding a new item 

router.post('/add-item', async(req,res)=>{
    try{
        const {itemName, itemDescription, price, seller, }=req.body;

        if (!itemName || !itemDescription || !price || !seller){
            return res.status(400)
                    .send({message:"All fields are requried"})
        }

        const newItem= await marketPlaceModel.create({
            itemName:itemName,
            itemDescription:itemDescription,
            price:price,
            seller:seller
        })

        return res.status(201)
                .send({message:"Item listed successfully", newItem})

    }catch(er){
        return res.status(500).send({message:"Internal server error", er})
    }
})


router.put('/update/:id', async(req,res)=>{
    try{
        const {id}= req.params;
        const {itemName, itemDescription, price, seller}= req.body;
        const item= await marketPlaceModel.findById(id);
        if (!item){
            return res.status(404).send({message:"Item not found"})
        }

        const updateItem= await marketPlaceModel.findByIdAndUpdate(
            id,
            {itemName, itemDescription, price, seller},
            {new:true}
        )

        if(!updateItem){
            return res.status(404).send({message:"Item not found"})
        }
        return res.status(201).send({message:"Item updated successfully",updateItem});


    }catch(er){
        return res.status(500).send({message:"Internal server error", error: er.message})
    }
})

module.exports=router;