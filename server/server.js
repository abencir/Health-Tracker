import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())

console.log('Mongo URI:', process.env.URI_MONGO);
mongoose.connect(process.env.URI_MONGO)
.then (() => {
    console.log('Conected to database is success')
}).catch((err)=>{
    console.log('DB Connection error:', err)
})
app.listen('5000', () => {
    console.log('Server running on port 5000')
})
