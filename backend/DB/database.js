require('dotenv').config()
const mongoose = require('mongoose')

const connectDB=async()=>{
   try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MongoDB is successfully connected')
   }catch(er){
    console.log(er)
   } 
}


module.exports=connectDB;