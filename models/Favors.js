import mongoose from "mongoose";

// Create schema
const favorSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'},
}, {collections: 'favors'});

// Create model
const favorModel = mongoose.model('FavorModel', favorSchema);

export default favorModel;