import mongoose from "mongoose";

// create follow schema
const followsSchema = new mongoose.Schema({
    followed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    follower: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'follows'})

// create follow model
const followsModel = mongoose.model('FollowModel', followsSchema)

export default followsModel