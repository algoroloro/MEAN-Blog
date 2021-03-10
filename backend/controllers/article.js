'use strict'

const Article = require('../models/article.js');

const ArticleController = {
    create: async (req, res) => {
        try {
            const article = await Article.create(req.body);
            res.status(201).send(article);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    // TODO: UPLOAD IMAGES
    read: async (req, res) => {
        try {
            const articles = await Article.find({ });
            res.status(200).send(articles);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    readById: async (req, res) => {
        try {
            const article = await Article.findById(req.params.id);
            res.status(200).send(article);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
    readByTag: async (req, res) => {
        try {
            const articles = await Article.find({tag: req.params.tag});
            res.status(200).send(articles);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    readLastTen: async (req, res) => {
        try {
            const articles = await Article.find({ }).sort('-_id').limit(10);
            res.status(200).send(articles);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    search: async (req, res) => {
        try {
            const articles = await Article.find({
                "$or": [
                    { title: { "$regex": req.params.search, "$options": "i" } },
                    { content: { "$regex": req.params.search, "$options": "i" } },
                ]
            })
            res.status(200).send(articles);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
    updateById: async (req, res) => {
        try {
            const article = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).send(article);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
    deleteById: async (req, res) => {
        try {
            await Article.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
};

module.exports = ArticleController;
