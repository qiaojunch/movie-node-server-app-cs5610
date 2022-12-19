import mongoose from 'mongoose';

// Create user schema 
const UserSchema = new mongoose.Schema ({
    username: { type: String, required: true, uniuqe: true },
    email: { type: String, uniuqe: true },
    DOB: { type: Date },
    password: { type: String, required: true},
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    isKid: { type: Boolean, default: false },
    image: { type: String, default: "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
}, {collection: 'users'});

// Create user model
const userModel = mongoose.model('UserModel', UserSchema);

export default userModel;