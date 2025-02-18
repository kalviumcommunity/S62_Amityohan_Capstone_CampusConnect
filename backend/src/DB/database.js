require('dotenv').config()
const mongoose = require('mongoose')

const connectDB=async()=>{

        await mongoose.connect(process.env.DB_URL,)
                    .then(()=>console.log("MongoDB is successfully connected"))
                    .catch(err=>console.error( "MongoDb connection error",err ))
}


module.exports=connectDB;