import * as dao from "./favors-dao";

const favorsController = (app) => {

    const userFavorsMovie = async (req, res) => {
        const uid = req.session['currentUser']._id
        const mid = req.params.mid
        const newFavor = await dao.userFavorsMovie(uid, mid)
        res.json(newFavor)
    }
    const userUnFavorsMovie = async (req, res) => {
        const {uid, mid} = req.params
        const status = await dao.userUnfavorsMovie(uid, mid)
        res.send(status)
    }
    const findAllFavors = async (req, res) => {
        const favors = await dao.findAllFavors()
        res.json(favors)
    }
    const findMoviesFavoredByUser = async (req, res) => {
        const uid = req.params.uid
        const movies = await dao.findMoviesFavorsByUser(uid)
        res.json(movies)
    }
    const findUsersWhoFavoredMovie = async (req, res) => {
        const mid = req.params.mid
        const users = await dao.findUsersThatFavorMovie(mid)
        res.json(users)
    }

    app.post('/api/user/favors/:mid', userFavorsMovie)
    app.delete('/api/user/unfavors/:mid', userUnFavorsMovie)
    app.get('/api/favors', findAllFavors)
    app.get('/api/user/:uid/favors', findMoviesFavoredByUser)
    app.get('/api/movie/:mid/favors', findUsersWhoFavoredMovie) 
}

export default favorsController;