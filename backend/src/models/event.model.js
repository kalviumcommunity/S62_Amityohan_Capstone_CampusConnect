const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDescription: String,
    date: { type: Date, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References User
    createdAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model("Event", EventSchema);