const router = require('express').Router();
const {getRole, createRole} = require('../../controllers/role-controller');
const authJwt =  require('../../middleware/authJwt')


router.post('/create', createRole);
//router.get('/', [authJwt.verifyToken] ,getUser); 
router.get('/:id',getRole); 

module.exports = router;
