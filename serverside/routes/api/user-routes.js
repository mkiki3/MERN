const router = require('express').Router();
const {getUser, createUser, deleteUser, loginUser, loginAsyncUser} = require('../../controllers/user-controller');

//router.loginAsync('/loginAsync',loginAsyncUser);
//router.login('/login', loginUser);
router.get('/:email', getUser);
router.post('/', createUser);
router.delete('/:id',deleteUser)
module.exports = router;