const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

/*
    Sample Encryption
    https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
    https://www.thepolyglotdeveloper.com/2019/02/hash-password-data-mongodb-mongoose-bcrypt/
    https://developpaper.com/an-example-of-user-password-encryption-using-mongoose-and-bcrypt/
*/

const SALT_WORK_FACTOR = 10;

//bcrypt is faster than bcryptjs
//https://javascript.plainenglish.io/node-js-bcrypt-vs-bcryptjs-benchmark-69a9e8254cc2#:~:text=Bcrypt%20is%203.1%20times%20faster,times%20faster%20in%20comparing%20function.

//SALT - https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
        password: {
            type: String,
            required: true
        },
		fullname: {
            type: String,
            required: true
        },

    }
);

//mongoose pre - middleware for https://mongoosejs.com/docs/middleware.html#pre
userSchema.pre('save', function (next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			// set the hashed password back on our user document
			user.password = hash;
			next();
		});
	});
});


const User = model('User', userSchema);
module.exports = User;