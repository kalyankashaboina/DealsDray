const express=require("express")
const {MongoClient}=require("mongodb")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const data=require("./functonality")
const cors=require("cors")

const app=express()
const port=3016
app.use(bodyparser.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.status(201).send({message:"hello world"})
})


app.get("/get",data.getLogins)
app.post("/insert",data.createLogin)
const MONGO_URL="mongodb+srv://kalyan:abcd1234@cluster0.uum0wi0.mongodb.net/sample"




mongoose.connect(MONGO_URL)
.then(()=>{console.log("databases connected sucesfully...!")})
.catch((err)=>{
    console.log("error",err)
})








app.listen(port,()=>{console.log("port is running sucessfully")})
