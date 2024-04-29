const Login=require("./database")

const createLogin=async(req,res)=>{

try{
    const{email,password}=req.body;
    const logindata=new Login({
        email,
        password,
    })

await logindata.save()
res.status(201).json({message:"data inserted sucessfully"})

}
catch(err){
    console.log("error occured",err)
    res.status(404).json("data not inserted")
}

}

const getLogins=async(req,res)=>{
try{
const Logindata=await Login.find()

res.status(201).json(Logindata)
}
catch(err){
    console.log("we got error",err)
    res.status(404).send({message:"error in getting data"})
}

}

module.exports={createLogin,getLogins}