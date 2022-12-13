import mongoose from 'mongoose';

// Create user schema 
const UserSchema = new mongoose.Schema ({
    username: { type: String, required: true, uniuqe: true },
    email: { type: String, required: true, uniuqe: true },
    password: { type: String, required: true},
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    isKid: { type: Boolean, default: false },
}, {collection: 'users'});

// Create user model
const userModel = mongoose.model('UserModel', UserSchema);

export default userModel;