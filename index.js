import express from express;
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000


mongoose.connect()
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})

