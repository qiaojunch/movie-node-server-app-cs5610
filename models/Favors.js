import mongoose, { mongo } from "mongoose";

const favorsSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'},
}, {collection: 'favors'})

const favorsModel = mongoose.model('favorsModel', favorsSchema)

export default favorsModel