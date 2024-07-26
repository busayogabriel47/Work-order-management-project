import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true

    },

        password: {
        type: String,
        required: true,
        minlength: 8
    }
});
const Users =  mongoose.model("Userlogin", loginSchema);

export default Users