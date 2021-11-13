//importing the package
import Express from "express";
import Mongoose from "mongoose";
import Dotenv from "dotenv/config";
import bodyParser from "body-parser";
import Cors from "cors";



//Import Routes
import ServicesRoute from "./routes/services.js";


//executing the package by putting it in a constant variable
const app = Express();

//middlewares
app.use(Cors());
app.use(bodyParser.json());
app.use('/services',ServicesRoute);


//Connect to DB
Mongoose.connect(process.env.DB_CONNECTION,() =>{
    console.log('Connected to DB bro')
})

//listening to the server
app.listen(4000);
