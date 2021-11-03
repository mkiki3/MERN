const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

exports.getUser = (req, res) => {
    let userId =  req.id
    User.find({_id: userId})
    .then(user => {
        console.log(user)
        res.status(200).send(user);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send(err.message);
    })
}

exports.getAllUsers = (req, res) => {
    User.find({})
    .then(user => {
        console.log(user)
        res.status(200).send(user);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send(err.message);
    })
}

exports.createUser = (req, res) => {
    //normally you would do some type of error checking
    //const newUser = await User.create({email: req.body.email, password: req.body.password});
    //there are validation libraries such as https://www.npmjs.com/package/joi
    const errors = [];
    /*if(doesUserExist){
        errors.push('Email Already exist');
    }*/
   
    if (!req.body.email) {
		errors.push('Missing Email Address');
	}

    if (!req.body.password) {
		errors.push('Missing Password');
	}

    if (errors.length > 0) {
		res.status(500).send({errors});
		return; //return here so the function does not continue
	}

   const user = User.create(req.body)
        .then(newUser => {
            res.status(200).send(newUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })

}

exports.loginAsyncUser = async (req, res) => {
    console.log(req.body);
    try{
        const foundUser = await User.findOne({email: req.body.email});

        if (!foundUser){
            return res.status(404).send({message: 'User not found'});
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, foundUser.password);

        if (!passwordIsValid){
            return res.status(401).send({errors: ['Invalid password']});
        }

        foundUser.password = '';
        res.status(200).send({user: foundUser, message: 'User logged in successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

exports.loginUser = (req, res) => {
    const errors = [];
    if (!req.body.email) {
		errors.push('Missing Email Address');
	}

    if (!req.body.password) {
		errors.push('Missing Password');
	}

    if (errors.length > 0) {
		return res.status(500).send({errors});
	}

    //const email = req.body.email;
    //https://mongoosejs.com/docs/api.html#model_Model.findOne
    //Promises - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    User.findOne({email: req.body.email})
    .then(foundUser => {
        if (!foundUser){
            return res.status(404).send({message: 'User not found'});
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, foundUser.password);

        if (!passwordIsValid){
            return res.status(401).send({errors: ['Invalid password']});
        }

        foundUser.password = '';
        let token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, {expiresIn: '45m'});
       // foundUser.jwtToken = token

        res.status(200).send({
        userId: foundUser._id,
        email: foundUser.email,
        fullname: foundUser.fullname,
        token: token,
        message: 'User logged in successfully'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err.message);
    })
}

exports.deleteUser = (req, res) => {
    const userToDelete = req.params.id;
    User.deleteOne({_id: req.params.id})
        .then(() => {
            res.status(200).send('Deleted Successfully');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
}

const doesUserExist = () => {
    console.log('doesUserExist')
    User.findOne({email: req.body.email})
    .then(foundUser => {
        if(!foundUser){
            return true
        }
        return false
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err.message);
    })
}
//https://www.bezkoder.com/node-js-mongodb-auth-jwt/
//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
//https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example

//Modal
//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
//https://www.digitalocean.com/community/tutorials/react-modal-component
//https://github.com/reactjs/react-modal