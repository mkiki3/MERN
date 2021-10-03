const router = require('express').Router();
const userRoutes = require('./user-routes');
const appointmentRoutes = require('./appointment-routes')

router.use('/user', userRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;