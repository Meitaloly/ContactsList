const fs = require('fs')
const path = require('path');

async function init(db) {
    const ContactsController = require('../Controllers/ContactsController')(db);
    try {
        let contactsFile = fs.readFileSync(path.resolve(__dirname, 'contacts.json'));
        if (contactsFile) {
            let contacts = JSON.parse(contactsFile);
            if (contacts && contacts.results && contacts.results.length > 0) {
                await ContactsController.loadContacts(contacts.results);
            }
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
