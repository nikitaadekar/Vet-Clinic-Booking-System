import Mongoose from "mongoose";

const UserSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
});

export default Mongoose.model('Users', UserSchema);