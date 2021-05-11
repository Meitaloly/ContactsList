const ContactsModel = require('../Models/Contacts/ContactsModel.js')

class ContactsController {
    constructor(db) {
        this.db = db;
    }

    async loadContacts(contactsList) {
        try {
            return await ContactsModel(this.db).loadContacts(contactsList);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

}

module.exports = (db) => {
    return new ContactsController(db);
};