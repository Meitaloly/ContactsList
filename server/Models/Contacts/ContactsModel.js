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

    async getContacts(name) {
        try {
            let query = [];
            if (name) {
                name = decodeURI(name)
                console.log(name);
                query.push(
                    {
                        $project: {
                            _id: 1,
                            firstThenLastName: {$concat: ["$name.first", " ", "$name.last"]},
                            lastThenFirstName: {$concat: ["$name.last", " ", "$name.first"]},
                            gender: 1,
                            name: 1,
                            email: 1,
                            phone: 1,
                            cell: 1,
                            picture: 1

                        }
                    },
                    {
                        $match: {
                            "$or": [
                                {
                                    "firstThenLastName": {"$regex": name, "$options": "i"}
                                }, {
                                    "lastThenFirstName": {"$regex": name, "$options": "i"}
                                },
                            ]
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            gender: 1,
                            name: 1,
                            email: 1,
                            phone: 1,
                            cell: 1,
                            picture: 1

                        }
                    },
                )
            }

            query.push({
                "$sort": {"name.first": 1},
            })


            return await this.db.Contacts.aggregate(query);
        } catch (e) {
            throw e;
        }
    }

    async deleteContact(contactId) {
        try {
            return await this.db.Contacts.deleteOne({_id: contactId});
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

}

module.exports = (db) => {
    return new ContactsModel(db);
}