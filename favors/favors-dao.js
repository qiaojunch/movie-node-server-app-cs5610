import favorModel from "../models/Favors";

// Create connection between user and favorred movie
export const userFavorsMovie = async (uid, mid) => {
    return await favorModel.create({ user: uid, movie: mid });
}

// Delete connection 
export const userUnFavorsMovie = async (uid, mid) => {
    return await favorModel.deleteOne({ user: uid, movie: mid });
}

// Find all movies favored by user
export const findMoviesFavoredByUser = async (uid) => {
    return await favorModel
        .find({ user: uid }, { user: false })
        .populate('movie', 'title')
        .exec();
}

// Find all users that like the movie
export const findUsersThatFavorMovie = async (mid) => {
    return await favorModel
        .populate( 'user', 'username')
        .exec();
}

// Find all favors
export const findAllFavors  = async () =>
    await favorModel.find();