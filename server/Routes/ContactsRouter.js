const express = require('express');
const ContactsRouter = express.Router();
const ContactsController = require('../Controllers/ContactsController');
const response = require('./response');
// const encoded = encodeURI(uri);

module.exports = (db) => {
    ContactsRouter.get('/', (req, res) => {
        let name = req.query.name ? req.query.name : null;
        ContactsController(db).getContacts(name)
            .then(token => {
                return response.success(res, token);
            })
            .catch(e => {
                return response.error(res, e);
            })
    })

    ContactsRouter.delete('/:contactId', (req, res) => {
        let contactId = req.params.contactId ? req.params.contactId : null;
        if (!contactId) {
            return response.error(res, "ContactId was not provided!");
        }
        ContactsController(db).deleteContact(contactId)
            .then(token => {
                return response.success(res, token);
            })
            .catch(e => {
                return response.error(res, e);
            })
    })

    return ContactsRouter;
}