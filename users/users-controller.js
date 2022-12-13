import * as dao from "./users-dao.js";

const UserController = (app) => {
    let currUser;

    const createUser = async (req, res) => {
        const user = req.body;
        const actualUser = await dao.createUser(user);
        res.json(actualUser);
    };

    const deleteUser = async (req, res) => {
        const uid = req.params.uid;
        const status = await dao.deleteUser(uid);
        res.json(status);
    };

    const updateUser = async (req, res) => {
        const uid = req.params.uid;
        const updates = req.body;
        const status = await dao.updateUser(uid, updates);
        res.json(status);
    };

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const uid = req.params.uid;
        const foundUser = await dao.findUserById(uid);
        res.json(foundUser);
    }

    const register = async (req, res) => {
        const user = req.body;
        console.log("user name", user.username);
        const foundUser = await dao.findByUserName(user.username);

        if (foundUser) {
            res.json(403);
            return;
        }
        // create user
        const actualUser = await dao.createUser(user);
        currUser = actualUser;
        res.json(actualUser);
    };

    const login = async (req, res) => {
        const user = req.body;
        
        const foundUser = await dao.findUserByCredentials(user.username, user.password);
        if (!foundUser) {
            res.json(403);
            return;
        }
        currUser = foundUser;
        res.json(foundUser);
    };

    // Retrieve current user
    const profile = async (req, res) => {
        if (currUser) {
            res.json(currUser);
            return;
        }
        res.send(403);
    }

    const logout = async (req, res) => {
        currUser = null;
        res.send(200);
    };

    app.post("/api/user", createUser);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);
    app.get("/api/user", findAllUsers);

    app.get("/api/user/:uid", findUserById);

    app.post("/api/register", register);
    app.post("/api/login", login);
    app.post("/api/profile", profile);
    app.post("/api/logout", logout);
}

export default UserController;
