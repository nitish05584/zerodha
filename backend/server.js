

const express=require("express");

const cors=require("cors");

const colors=require('colors');

const cookieParser=require("cookie-parser")

const dotenv=require("dotenv");

const connectDB = require("./config/db");




const app=express();

dotenv.config();

connectDB();


app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(cookieParser());
app.use(cors());


const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
console.log(`server is running on port${PORT}`.bgMagenta)
})

