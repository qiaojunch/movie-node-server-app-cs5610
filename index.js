import express from 'express';
import session from 'express-session';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MovieController from './movies/movies-controller.js';
import UserController from './users/users-controller.js';
import FollowsController from './follows/follows-controller.js';
import CommentController from './comments/comments-controller.js';
import FollowController from './follows/follows-controller.js';
import SessionController from './session-controller.js';
dotenv.config();

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json());

SessionController(app);
MovieController(app);
UserController(app);
FollowsController(app);
CommentController(app);
FollowController(app);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successful!"));  

app.listen(4000, () => {
    console.log("Backend server is running on port 4000.");
})