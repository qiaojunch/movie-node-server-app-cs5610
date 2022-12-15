import favorsModel from "../models/Favors";

export const userFavorsMovie = async (uid, mid) => {
    return await favorsModel.create({user: uid, movie: mid})
}
export const userUnfavorsMovie = async(uid, mid) => {
    return await favorsModel.deleteOne({user: uid, movie: mid})
}
export const findMoviesFavorsByUser = async(uid) => {
    return await favorsModel
        .find({user: uid}, {user: false})
        .populate('movie', 'title')
        .exec()
}
export const findUsersThatFavorMovie = async(mid) => {
    return await favorsModel.find({movie: mid}, {movie: false})
        .populate('user', 'username')
        .exec()
}
export const findAllFavors = async () =>
    await favorsModel.find()
