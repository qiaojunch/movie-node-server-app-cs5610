import * as dao from "./follows-dao.js";

const FollowController = (app) => {
    // create connection: follow a user
    const followUser = async (req, res) => {
        const follow = req.body;
        const currUser = req.session['currentUser'];
        follow.follower = currUser._id;
        const actualFollow = await dao.followUser(follow);
        res.json(actualFollow);
    }

    // find user's followers
    const findFollowers = async (req, res) => {
        const followed = req.params.followed;
        const followers = await dao.findFollowers(followed);
        res.json(followers);
    }

    // find user's following
    const findFollowing = async (req, res) => {
        const follower = req.params.follower;
        const followed = await dao.findFollowing(follower);
        res.json(followed);
    }

    app.post('/api/follow', followUser);
    app.get('/api/user/:followed/followers', findFollowers);
    app.get('/api/user/:follower/following', findFollowing);
}

export default FollowController;