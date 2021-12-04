import Mongoose from "mongoose";

const BookingSchema = Mongoose.Schema({
    serviceId: {
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
        type: Date,
        default: Date.now
    },
    status:{
        type: String,

    }
});

export default Mongoose.model('Bookings', BookingSchema);
