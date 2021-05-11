const fs = require('fs')
const path = require('path');

async function init(db) {
    const ContactsController = require('../Controllers/ContactsController')(db);
    try {
        let contactsFile = fs.readFileSync(path.resolve(__dirname, 'contacts.json'));
        if (contactsFile) {
            let contacts = JSON.parse(contactsFile);
            if (contacts && contacts.results) {
                contacts = contacts.results;
            } else {
                contacts = [];
            }
            await ContactsController.loadContacts(contacts);
        } else {
            throw "there was a problem loading the contacts from json file"
        }
    } catch (e) {
        console.log(e)
        throw e;
    }
}

module.exports = async db => {
    return await init(db);
};
