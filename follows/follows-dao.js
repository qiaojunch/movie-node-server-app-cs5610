import followModel from "../models/Follow.js";

// Create follow connection
export const followUser = (follow) => 
    followModel.create(follow);

// Find user's followers
export const findFollowers = (followed) => 
    followModel.find({ followed })
    .populate("follower")
    .exec()

// Find user's following 
export const findFollowing = (follower) =>
    followModel.find({follower})
    .populate("followed")
    .exec()