const mongoose=require('mongoose');

const NoteSchema=new mongoose.Schema({
    noteTitle: { type: String, required: true },
    noteDescription: String,
    fileUrl: { type: String, required: true }, // Link to uploaded notes
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required:true}, // References User
    createdAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model("Note", NoteSchema); 