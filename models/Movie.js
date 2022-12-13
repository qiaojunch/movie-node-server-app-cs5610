import mongoose from 'mongoose';

// Create movie schema 
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, uniuqe: true },
    desc: { type: String },
    img: { type: String},
    year: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    imdbID: { type: String },
    rated: { type: String },
    liked: { type: Boolean, default: false },
    likes: { type: Number, default: 0}
}, {collection: 'movies'});

// Create movie model
const movieModel = mongoose.model('MovieModel', MovieSchema);

export default movieModel;