const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./config/connection');
const cors = require('cors')

app.use(cors())

/*use for POST and PUT you are sending data ( in the form of some data object)
to the server to accept/store data (object), which is enclosed in the body (req.body) of that request*/
app.use(express.urlencoded({ extended: true }));

//recognize incoming data is a JSON Object
app.use(express.json());

const PORT = process.env.PORT || 3001;




app.get("/read", (req, res) => {
    res.send("Success!")
});
/*

//sign up
app.post("/signup", (req,res) =>{
    console.log("SignUp:")
    console.log(req.body.firstname)
    console.log(req.body.lastname)
    console.log(req.body.password)
    res.send("Sign Up Successful!")
})

//(C)RUD
app.post("/create", (req,res) =>{
    let name = req.body.name;
    console.log('Name: ' + name)
    res.send("Received!")
})

// C(R)UD
app.get("/read", (req, res) => {
    res.send("Success!")
});

//CR(U)D
app.put("/update", (req,res) =>{
    res.send("Updated!")
})

//CRU(D)
app.delete("/delete", (req,res) =>{
    res.send("Deleted!")
})
*/

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
