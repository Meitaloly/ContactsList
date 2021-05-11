const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/namogoo", {
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.once('open', () => {
    console.log("DB connected successfuly")
});
db.on('error', err => {
    console.log(err);
});

module.exports = {
    Contacts: require('./Contacts/ContactsSchema.js'),
};