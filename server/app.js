//importing the package
import Express from "express";
import Mongoose from "mongoose";
import Dotenv from "dotenv/config";
import bodyParser from "body-parser";
import Cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";





//Import Routes
import ServicesRoute from "./routes/services.js";
import BookingsRoute from "./routes/bookings.js";



//executing the package by putting it in a constant variable
const app = Express();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Vet Clinic Booking System",
            description: "Vet Clinic Booking System API Information",
            contact: {
                name: "Nikita Adekar"
            },
            servers: ["http://localhost:4000/"]
        }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//middlewares
app.use(Cors());
app.use(bodyParser.json());
app.use('/services',ServicesRoute);
app.use('/bookings',BookingsRoute);


//Connect to DB
Mongoose.connect(process.env.DB_CONNECTION,() =>{
    console.log('Connected to DB bro')
})

//listening to the server
app.listen(4000);
