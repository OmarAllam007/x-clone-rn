import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB Connected Successfully!");
    }catch(err){
        console.log("Error connection")
        console.log(err);
    }
}