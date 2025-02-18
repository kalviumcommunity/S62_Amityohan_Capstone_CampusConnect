const express=require('express');
const router=express.Router();
const moment=require('moment')

const eventModel=require('../models/event.model.js');

//getting all the events

router.get('/',async(req,res)=>{
    try{
        const events=await eventModel.find();
        res.status(200).send({message:"Event fetched", events});

    }catch(er){
        return res.status(500)
                .send({message:"Internal Server error",error:er.message});
    }
})


// getting event by id

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const event=await eventModel.findById(id);
        if(!event){
            return res.status(404).send({message:" Event not found", id});
        }

        return res.status(200)
                .send({message: "Event found", event});
        
    }catch(er){
        return res.status(500)
                .send({message: "Internal server error", error:er.message})
    }
});

//posting a new event 

router.post('/add-event', async(req,res)=>{
    try{
        const {eventName, eventDescription, date, organizer,location }=req.body;

        if(!eventName || !eventDescription || !date || !organizer || !location){
            return res.status(400).send({message: "All fields are required"});
        }
        
        formattedDate = moment(date, "DD/MM/YY").format("YYYY-MM-DD");

        const newEvent= await eventModel.create({
            eventName:eventName,
            eventDescription:eventDescription,
            date:formattedDate,
            organizer:organizer,
            location:location

        })

        return res.status(201)
                .send({message:"New Event added", newEvent})

    }catch(er){
        return res.status(500)
            .send({message: "Internal server error", er})
    }
})

//to update an event

router.put("/update/:id", async(req,res)=>{
    try{
        const {id}=req.params;
        const{eventName, eventDescription, date, organizer, location}=req.body;
        const event=await eventModel.findById(id);
        
        if(!event){
            return res.status(404).send({message:"Event not found"});
        }

        const updatedEvent=await eventModel.findByIdAndUpdate(
            id,
            {eventName, eventDescription, date, organizer, location},
            {new:true}
        )

        if(!updatedEvent){
            return res.status(404).send({message: "Event not found"});
        }

        return res.status(201).send({message:"Event Updated", updatedEvent})
        

    }catch(er){ 
        return res.status(500).send({message:"Internal server error", error:er.message})
    }
})

module.exports=router;