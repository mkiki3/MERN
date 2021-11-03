const router = require('express').Router();
const {createAppointment,getAppointment,getAllAppointments, cancelAppointment,updateAppointment} = require('../../controllers/appointment-controller');
const authJwt =  require('../../middleware/authJwt')


router.post('/createAppointment',[authJwt.verifyToken], createAppointment)
router.get('/getAllAppointment',[authJwt.verifyToken],  getAllAppointments )
router.get('/:id',[authJwt.verifyToken], getAppointment )
router.delete('/cancel/:id' ,[authJwt.verifyToken],cancelAppointment) 
router.put('/change/:id',[authJwt.verifyToken],updateAppointment)

module.exports = router;

//get rid of token in local storage