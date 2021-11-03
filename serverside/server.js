const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./config/connection');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const secret = process.env.SECRET_KEY
//app.use(cors())

/*use for POST and PUT you are sending data ( in the form of some data object)
to the server to accept/store data (object), which is enclosed in the body (req.body) of that request*/
app.use(express.urlencoded({ extended: true }));

//recognize incoming data is a JSON Object
app.use(express.json());

const PORT = process.env.PORT || 3001;

//look up redux

//class components have lifecycles
//functional components have hooks

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
