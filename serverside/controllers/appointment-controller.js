const {Appointment} = require('../models');

exports.getAppointment = (req, res) => {
    Appointment.find({_id: req.params.id})
        .then(appointment => {
            res.status(200).send(appointment);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err.message);
        })
}

exports.createAppointment = (req, res) => {
    Appointment.create(req.body)
        .then(appointment => {
            res.status(200).send(appointment);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
}


exports.cancelAppointment = (req, res) => {
    Appointment.deleteOne({_id: req.params.id})
        .then(appointment => {
            res.status(200).send(appointment);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err.message);
        })
}

exports.updateAppointment = (req, res) => {
    Appointment.findOneAndUpdate({_id: req.params.id},{
        appointmentType: req.body.type
    }, {new: true}).then(appointment => {
            res.status(200).send(appointment);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err.message);
        })
    //Appointment.updateOne({appointmentType: req.params.type}) //use another field 
        //update field here
        
}