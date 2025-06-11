
require("dotenv").config();
const express=require('express');
const cors=require('cors')
//connecting to database
const connectDB=require('./DB/database.js');
connectDB();

//importing models
const userModel=require('./models/user.model.js')
const noteModel=require('./models/note.model.js')
const eventModel=require('./models/event.model.js')
const markmetPlaceModel=require('./models/marketPlace.model.js')

const app=express();
const PORT=process.env.PORT || 5000;

//importing routes 
const noteRoutes=require('./routes/note.routes.js');
const eventRoutes=require('./routes/event.routes.js');
const marketPlaceRoutes=require('./routes/marketplace.routes.js')
const userRoutes=require('./routes/user.route.js')
//middleware
app.use(express.json());
app.use(cors())

//Routes
app.use("/api/notes", noteRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/marketplace", marketPlaceRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
