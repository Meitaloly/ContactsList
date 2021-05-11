const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

class ContactsModel {
    constructor(db) {
        this.db = db;
    }

    async loadContacts(contactsList) {
        let promises = [];
        for (let contact of contactsList) {
            promises.push(new this.db.Contacts(contact).save())
        }
        try {
            await Promise.all(promises);
            console.log("all contacts saved successfully")
        } catch (e) {
            console.log(e);
            throw "error in loading contacts from json file"
        }
    }
}

module.exports = (db) => {
    return new ContactsModel(db);
}