import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

import cors from "cors" 

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

app.use(cors({
  origin:"https://bookstore-1-72zn.onrender.com",
  credentials: true
}));
app.use(express.json());//parse

dotenv.config(); 
//load environment variables from env file

const PORT=process.env.PORT ||4000;
const URI=process.env.MongoDBURI;
//connect to mongodb
try{
    mongoose.connect(URI,{
    });
    console.log("Connected to MongoDB");
}
catch(error){
    console.log("error;",error);
}

//defining routes
app.use('/book',bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});