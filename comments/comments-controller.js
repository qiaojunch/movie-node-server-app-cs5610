import * as dao from "./comments-dao.js";

const CommentController = (app) => {
    // Create
    const createComment = async (req, res) => {
        const comment = req.body;
        const currUser = req.session['currentUser'];
        console.log("****from server comment****",comment.comment);
        comment.author = currUser._id;
        const actualComment = await dao.createComment(comment);
        res.json(actualComment);
    }

    // Find comments for movie
    const findCommentsByMovie = async (req, res) => {
        const imdbID = req.params.imdbID;
        const comments = await dao.findCommentsByMovie(imdbID);
        res.json(comments);
    }

    // Find comments by user
    const findCommentsByAuthor = async (req, res) => {
        const authorID = req.params.author;
        const comments = await dao.findCommentsByAuthor(authorID);
        res.json(comments);
    } 

    // Delete
    const deleteCommentById = async (req, res) => {
        const commentId = req.params.cid;
        const status = await dao.deleteCommentById(commentId);
        res.json(commentId)
    }

    app.post('/api/comments', createComment);
    app.get('/api/movie/:imdbID/comments', findCommentsByMovie);
    app.get('/api/user/:author/comments', findCommentsByAuthor);
    app.delete('/api/comments/:cid', deleteCommentById);
}

export default CommentController;