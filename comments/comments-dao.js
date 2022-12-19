import commentModel from "../models/Comments.js";

// Create
export const createComment = (comment) => 
    commentModel.create(comment);

// Find all comments for movie
// populate user object 
export const findCommentsByMovie = (imdbID) => 
    commentModel.find({imdbID}).populate('author').exec()

// Find all comments posted by user
export const findCommentsByAuthor = (author) => 
    commentModel.find({author})

// Delete 
export const deleteCommentById = (cid) => {
    const status = commentModel.deleteOne({_id: cid})
    return cid;
}