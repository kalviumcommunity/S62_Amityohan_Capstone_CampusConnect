
require("dotenv").config;
const express=require('express');

//connecting to database
const connectDB=require('./src/DB/database.js');

//importing models
const userModel=require('./src/models/user.model.js')
const noteModel=require('./src/models/note.model.js')
const eventModel=require('./src/models/event.model.js')
const markmetPlaceModel=require('./src/models/marketPlace.odel.js')

const app=express();
const PORT=process.env.PORT || 5000;

//middleware
app.use(express.json())


connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

