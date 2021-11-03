const router = require('express').Router();
const {getUser, getAllUsers, createUser, deleteUser, loginUser} = require('../../controllers/user-controller');
const authJwt =  require('../../middleware/authJwt')

router.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    console.log('test')
    next();
});

router.post('/login', loginUser);
router.get('/getUser', [authJwt.verifyToken] ,getUser); 
router.get('/getAllUsers', [authJwt.verifyToken] ,getUser); 
router.post('/signup', createUser);
router.delete('/:id',deleteUser)
module.exports = router;
