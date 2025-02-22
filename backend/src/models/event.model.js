const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDescription: String,
    date: { type: Date, required: true, get: v => v.toISOString().split('T')[0] },
     // References User
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References User
    location:{type: String, required: true},
    createdAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model("Event", EventSchema);