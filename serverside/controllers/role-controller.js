const {Role} = require('../models');

exports.getRole= (req, res) => {
    Role.find({_id: req.params.id})
        .then(userRole => {
            res.status(200).send(userRole);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err.message);
        })
}


exports.createRole = (req, res) => {
    Role.create(req.body)
        .then(userRole => {
            res.status(200).send(userRole);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
}

