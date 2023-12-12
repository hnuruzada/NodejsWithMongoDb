const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()



 const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    age:{type:Number,required:true},
    mail:{type:String,unique:true,required:true},
    isMarried:{type:Boolean},
    isDeleted:{type:Boolean}
},{timestamps:true}
)
const app=express()



app.use(cors())
app.use(bodyParser.json())

const Users=mongoose.model("users",userSchema)


const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url).catch(err=>console.log("Db not connect"))

app.listen(PORT,()=>{
        console.log("Server Connection");
})

