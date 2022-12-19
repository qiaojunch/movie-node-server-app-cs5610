import * as dao from "./movies-dao.js";

const MovieController = (app) => {
    const createMovie = async (req, res) => {
        const movie = req.body;
        const actualMovie = await dao.createMoive(movie);
        res.json(actualMovie);
    };
    const updateMovie = async (req, res) => {
        const mid = req.params.mid;
        const updates = req.body;
        const status = await dao.updateMovie(mid, updates);
        res.send(status);
    };
    const deleteMovie = async (req, res) => {
        const mid = req.params.mid;
        const status = await dao.deleteMovie(mid);
        res.send(status);
    };

    const findMovieAll = async (req, res) => {
        const type = req.query.type;
        const movies = await dao.findMovieAll(type);
        res.json(movies);
    }

    const findMoiveById = async (req, res) => {
        const movie = await dao.findMoiveById(req.params.mid);
        res.json(movie);
    }

    // Find random movie 
    const findMoiveRandom = async (req, res) => {
        const type = req.query.type;
        const movie = await dao.findMovieRandom(type);
        res.json(movie);
    }


    app.post("/api/movie", createMovie);
    app.put("/api/movie/:mid", updateMovie);
    app.delete("/api/movie/:mid", deleteMovie);
    app.get("/api/movie/find", findMovieAll);
    app.get("/api/movie/find/:mid", findMoiveById);
    app.get("/api/movie/random", findMoiveRandom);
}

export default MovieController;
