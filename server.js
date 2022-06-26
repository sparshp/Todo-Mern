import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import routes from "./routes/ToDoRouters";

const app = express();
const DATABASE_URL = process.env.MONGO_URL
app.use(express.json());
app.use(cors());

app.use(routes)

const connectDB = async(DATABASE_URL) => {
    try {
        const res=await mongoose.connect(DATABASE_URL)
        console.log('Connected to database successfully')
    } catch (error) {
        console.error(error)
    }
}

connectDB(DATABASE_URL)

app.listen(5000, () => {
    console.log("App connected")
})