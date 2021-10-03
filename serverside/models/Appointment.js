const {Schema, model} = require('mongoose');

const appointmentsSchema = new Schema(
	{
		appointmentType: {
			type: String,
			required: true
		},
        cost: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        Date: {
            type: Date,
            required: true
        }
    }
);


const Appointment = model('Appointment', appointmentsSchema);
module.exports = Appointment;