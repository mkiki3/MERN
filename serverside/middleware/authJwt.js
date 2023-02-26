const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()
const secret = process.env.SECRET_KEY

//save token in local storage //front end

//verify Token
//call next to proceed to the next step
//
verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];
	console.log('Verify token ' + token)
	console.log('secret ' + secret)
	if (!token) {
		return res.status(403).send({
			message: "No token provided!"
		});
	}

	jwt.verify(token, secret, (err, decoded) => {
	//Get auth header value
    //when we send our token, we want to send it in the header
    //send it as the authorization value
		//console.log( 'decoded '  + JSON.stringify(decoded))
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!"
			});
		}
		req.id = decoded.id;
		next()

	});
};

const authJwt = {
	verifyToken: verifyToken
};
module.exports = authJwt;
