import Mongoose from "mongoose";

const ServiceSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

export default Mongoose.model('Services', ServiceSchema);

