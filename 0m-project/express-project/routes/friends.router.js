const express = require('express');
const friendController = require('../conrollers/friends.controller.js');
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip adress:', req.ip);
    next();
});
friendsRouter.post('/', friendController.postFriends);
friendsRouter.get('/', friendController.getFriends);
friendsRouter.get('/:friendId', friendController.getFriend);

module.exports = friendsRouter;
