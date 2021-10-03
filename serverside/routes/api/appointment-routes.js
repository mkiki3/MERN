const router = require('express').Router();
const {createAppointment,getAppointment,cancelAppointment,updateAppointment} = require('../../controllers/appointment-controller');

router.post('/', createAppointment)
router.get('/:id', getAppointment )
router.delete('/cancel/:id',cancelAppointment) 
router.put('/change/:id',updateAppointment)
module.exports = router;