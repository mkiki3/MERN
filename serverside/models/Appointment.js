const {Schema, model} = require('mongoose');

const appointmentsSchema = new Schema(
	{
		userId: {
            type: Number,
			required: false
        },
        appointmentType: {
			type: String,
			required: false
		},
        cost: {
            type: Number,
            required: false
        },
        time: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
);


const Appointment = model('Appointment', appointmentsSchema);
module.exports = Appointment;