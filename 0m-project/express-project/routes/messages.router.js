const express = require('express');
const messagesController = require('../conrollers/messages.controller.js');
const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessages);

module.exports = messagesRouter;
