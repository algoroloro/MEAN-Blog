'use strict'

const UserController = require('../controllers/user.js');

const UserRouter = express => {
    const api = express.Router();
    api.post('/create', UserController.create);
    api.get('/profile/:id', UserController.profile);
    api.put('/update/:id', UserController.updateById);
    api.delete('/delete/:id', UserController.deleteById);
    return api;
}

module.exports = UserRouter;
