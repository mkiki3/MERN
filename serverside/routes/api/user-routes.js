const router = require('express').Router();
const {getUser, createUser, deleteUser, loginUser, loginAsyncUser} = require('../../controllers/user-controller');

router.post('/loginAsync',loginAsyncUser);
router.post('/login', loginUser);
router.get('/:email', getUser);
router.post('/', createUser);
router.delete('/:id',deleteUser)
module.exports = router;

//getUser
//http://localhost:3001/api/user/kiki@aol.com

//http://localhost:3001/api/user/loginAsync
//use body
//response: data and hash arguments required