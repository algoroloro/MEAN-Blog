'use strict'

const ArticleController = require('../controllers/article.js');

const ArticleRouter = express => {
    const api = express.Router();
    api.post('/create', ArticleController.create);
    api.get('/read', ArticleController.read);
    api.get('/read-id/:id', ArticleController.readById);
    api.get('/read-tag/:tag', ArticleController.readByTag);
    api.get('/read-last', ArticleController.readLastTen);
    api.get('/read-time', ArticleController.readPerTime);
    api.get('/read-rate', ArticleController.readPerRate);
    api.get('/read-user/:id', ArticleController.readPerUser);
    api.get('/search/:search', ArticleController.search);
    api.put('/update/:id', ArticleController.updateById);
    api.delete('/delete/:id', ArticleController.deleteById);
    return api;
};

module.exports = ArticleRouter;
