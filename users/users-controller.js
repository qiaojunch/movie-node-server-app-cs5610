import * as dao from "./users-dao.js";

let currentUser = null;

const UserController = (app) => {

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
        const updatedUser = await dao.updateUser(uid, updates);
        req.session['currentUser'] = updatedUser;
        res.json(updatedUser);
    };

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const uid = req.params.uid;
        const foundUser = await dao.findUserById(uid);
        if (foundUser) {
            res.json(foundUser);
            return;
        }
        res.sendStatus(404);
        
    }

    const register = async (req, res) => {
        const user = req.body;
        const foundUser = await dao.findByUserName(user.username);

        if (foundUser) {
            res.sendStatus(403);
            return;
        }
        // create user
        const currUser = await dao.createUser(user);
        req.session['currentUser'] = currUser;
        res.json(currUser);
    };

    const login = async (req, res) => {
        const credentials = req.body;
        
        const foundUser = await dao.findUserByCredentials(credentials.username, credentials.password);
        if (!foundUser) {
            res.sendStatus(403);
            return;
        }
        req.session['currentUser'] = foundUser;
        res.json(foundUser);
    };

    // Retrieve current user
    const profile = async (req, res) => {
        if (req.session['currentUser']) {
            res.json(req.session['currentUser']);
            return;
        }
        res.sendStatus(403);
    }

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
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
