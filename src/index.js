import dotenv from "dotenv";
import  connectDB from "./db/connections.js"

dotenv.config()

connectDB();