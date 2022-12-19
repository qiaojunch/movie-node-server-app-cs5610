import userModel from "../models/User.js";

export const createUser = (user) => {
    return userModel.create(user);
}
export const updateUser = (uid, updates) => {
    const updatedUser = userModel.findByIdAndUpdate({_id: uid}, updates, {new: true});
    return updatedUser;
}
export const deleteUser = (id) => {
    const status = userModel.deleteOne({_id: id});
    return status;
}
export const findAllUsers = () => {
    return userModel.find()
}
export const findUserById = (id) => {
    return userModel.findById(id, {password: false});
}
export const findByUserName = (username) => {
    return userModel.findOne({username});
}
export const findUserByCredentials = async (username, password) => 
    await userModel.findOne({ username, password }, { password: false })  // filter out password