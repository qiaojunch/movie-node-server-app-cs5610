import mongoose from "mongoose";

// Create Comment Shema
const commentSchema = new mongoose.Schema({
    comment: String,
    imdbID: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'comments'})

// Create Comment Model
const commentModel = mongoose.model('CommentModel', commentSchema);

export default commentModel;