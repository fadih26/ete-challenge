// Database configuration and connection
import mongoose from "mongoose"

const DB_URL = process.env.DB_URL || "mongodb+srv://fadi26:uO5POVqkU68RYMwl@cluster0.wjitxkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
export default function connectDB(){

    mongoose.connect(DB_URL)
    .then(() => {
        console.log('Database Connected')
})
.catch((err) => {
    console.log(err)
})
} 