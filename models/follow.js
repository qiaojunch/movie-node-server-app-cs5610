import mongoose from "mongoose";
import followsSchema from "./follows-schema.js";

const followsSchema = mongoose.Schema({
    followed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    follower: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'follows'})

const followsModel = mongoose.model('FollowModel', followsSchema)

export default followsModel