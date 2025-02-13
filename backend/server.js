
require("dotenv").config;
const express=require('express');

//connecting to database
const connectDB=require('./DB/database.js');

//importing models
const userModel=require('./models/user.model.js')
const noteModel=require('./models/note.model.js')
const eventModel=require('./models/event.model.js')
const marketPlaceModel=require('./models/marketPlace.model.js')

const app=express();
const PORT=process.env.PORT || 5000;

//middleware
app.use(express.json())


connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

