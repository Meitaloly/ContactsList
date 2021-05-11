const express = require('express');
const ContactsRouter = express.Router();
const ContactsController = require('../Controllers/ContactsController');
const response = require('./response');

module.exports = (db) => {
    ContactsRouter.get('/', (req, res) => {
        ContactsController(db).getAllContacts()
            .then(token => {
                return response.success(res, token);
            })
            .catch(e => {
                return response.error(res, e);
            })
    })

    return ContactsRouter;
}