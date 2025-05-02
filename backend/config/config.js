import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.URL) 
        console.log("Connected", connect.connection.host)
    } catch (error) {
        console.log(error)
    }
}