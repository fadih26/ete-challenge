import express from "express";
import dotenv from 'dotenv';
import connectDB from "./Config/mongoConfig.js";
import cors from "cors"
import  productRouter  from "./Routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json())
app.use('/Images',express.static('Images'));
app.use('/product', productRouter)


connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) =>{ 
    if(!error) {
        console.log("Server is Running, and App is listening on port "+ PORT) 
    } else {
        console.log("Error: ", error)
    }
} 
);