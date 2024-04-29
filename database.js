
const mongoose=require("mongoose")


const LOGINSchema=new mongoose.Schema({
  
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
       
    },
    
})

module.exports=mongoose.model("login",LOGINSchema)