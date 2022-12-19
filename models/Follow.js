import mongoose from "mongoose";

// follow schema
const followSchema = new mongoose.Schema({
    // user being followed
    followed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    // currentUser 
    follower: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'follows'})

// follow model
const followModel = mongoose.model('FollowModel', followSchema);

export default followModel;