'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
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
    time: {
        type: Number,
        required: true,
    },
    rate: {
        type: Number,
    },
    image: {
        type: String
    },
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
