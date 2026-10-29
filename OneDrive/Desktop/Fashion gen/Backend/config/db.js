import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("mongoose connected successfully")
    } catch(error){
        console.error("MongoDB coonection error:",error.message);
        process.exit(1);
    }
};
export default connectDB;