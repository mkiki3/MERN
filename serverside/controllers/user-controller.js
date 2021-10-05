const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.getUser = (req, res) => {
    User.find({email: req.params.email})
        .then(user => {
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

    User.create(req.body)
        .then(newUser => {
            res.status(200).send(newUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
}

exports.loginAsyncUser = async (req, res) => {
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

//I prefer this one over async
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
    /*
        Javascript is synchronous 
          example:
            command 1
            command 2
            long running command 3
            command 4
          Old School was to use setTimeout - wait for a certain amount of time
          
          Newer - Callbacks - 
          function(someCommand, a callback function){
              wait for someCommand to finish, then call the callback function
          }

          Newest Promise
            new Promise((resolve, reject) => {
                some long running function
                resolve(results)

                or 
                reject(errors)
            })


            Way One:
                set up function to be async
                async function someFunc (params){
                    const variable = await long running function(); //waits for the function to complete
                    use variable from long running function
                }

            Way Two:
                function someFunc (params){
                    long running function()
                    .then( function(results from long running function as the params) {

                    })
                    .catch( function(errors from the long running function as params){
                        
                    })
                }

                function someFunc(params){
                    long running function()
                    .then(results => {

                    })
                    .catch(errors => {

                    })
                }

    */
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
        res.status(200).send({user: foundUser, message: 'User logged in successfully'});
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

//https://www.bezkoder.com/node-js-mongodb-auth-jwt/
//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
//https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example

//Modal
//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
//https://www.digitalocean.com/community/tutorials/react-modal-component
//https://github.com/reactjs/react-modal