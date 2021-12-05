import Mongoose from "mongoose";
import Joi from "joi";

const BookingSchema = Mongoose.Schema({
    serviceId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    clientInformation: { type: [{
            clientName: {
                type: String, 
                required: true
            },
            clientPhone: {
                type: String,
                required: true
            },
            clientEmail: {
                type: String, 
                required: true

            },
            petName: {
                type: String,
                required: true
            },
            petType: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    bookedTime: {
        type: String,
        required: true
    },
    
    
});

export default Mongoose.model('Bookings', BookingSchema);
