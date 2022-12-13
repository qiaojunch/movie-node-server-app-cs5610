import userModel from "../models/User.js";

export const createUser = (user) => {
    return userModel.create(user);
};
export const updateUser = (id, updates) => {
    const status = userModel.findByIdAndUpdate({_id: id}, updates);
    return status;
};
export const deleteUser = (id) => {
    const status = userModel.deleteOne({_id: id});
    return status;
}
export const findAllUsers = () => {
    return userModel.find()
};
export const findUserById = (id) => {
    return userModel.findById(id);
};
export const findByUserName = (username) => {
    return userModel.findOne({username});
};
export const findUserByCredentials = (username, password) => {
    return userModel.findOne({ username, password }, { password: false });  // filter out password
};