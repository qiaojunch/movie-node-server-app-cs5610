import movieModel from "../models/Movie.js";

// Create
export const createMoive = (movie) => {
    const newMovie = new movieModel(movie);
    const savedMovie = newMovie.save();      // save movie to db
    return savedMovie;
}

// Upate
export const updateMovie = async (id, updates) => {
    const status = await movieModel.updateOne(
        {_id: id}, 
        {$set: updates}
    );
    return status;
}

// Delete
export const deleteMovie = (id) => {
    const status = movieModel.deleteOne( {_id: id} );
    return status;
}
// Get random movie
export const findMovieRandom = (type) => {
    let movie;
    if (type === "series") {
        movie = movieModel.aggregate([
            { $match: { isSeries: true } },
            { $sample: {size: 1} },
        ]);
    } else {
        movie = movieModel.aggregate([
            { $match: { isSeries: false } },
            { $sample: {size: 1} },
        ]);
    } 
    return movie;
}

// Get by ID
export const findMoiveById = (id) => {
    const movie = movieModel.findById(id);
    return movie;
}

// Get all
export const findMovieAll = () => {
    const movies = movieModel.find();
    return movies;
}