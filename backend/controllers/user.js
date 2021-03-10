'use strict'

const User = require('../models/user.js');

const UserController = {
    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    profile: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
    updateById: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).send(user);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
    deleteById: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            return res.status(404).send(error);
        }
    },
};

module.exports = UserController;
