import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MovieController from './movies/movies-controller.js';
import UserController from './users/users-controller.js';
dotenv.config();

const app = express();
app.use(express.json());

MovieController(app);
UserController(app);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successful!"));  

app.listen(4000, () => {
    console.log("Backend server is running on port 4000.");
})