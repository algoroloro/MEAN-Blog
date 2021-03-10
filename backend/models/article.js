'use strict'

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tag: {
        type: [String],
        required: true,
    },
    content: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    image: {
        type: String
    },
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
