const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDescription: String,
    date: { type: Date, required: true, get: v => v.toISOString().split('T')[0] },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References User
    location:{type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    status:{type:String, default: "Upcoming"}
})

module.exports=mongoose.model("Event", EventSchema);