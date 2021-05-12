const express = require('express');
const bodyParser = require("body-parser");
const db = require("./Models/db")
const app = express()
const port = 3030;
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname + '/statics'));
app.use(bodyParser.json({
    limit: '100mb'
}));

app.listen(port, () => {
    console.log(`******************************`);
    console.log(`   server listening on port: ${port}`);
    console.log(`******************************`);
})

app.use(async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

// require('./tools/loadContactsFromJSON')(db)

app.use('/api/Contacts', require('./Routes/ContactsRouter')(db));
