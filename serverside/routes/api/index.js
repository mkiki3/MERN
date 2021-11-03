const router = require('express').Router();
const userRoutes = require('./user-routes');
const roleRoutes = require('./role-routes');
const appointmentRoutes = require('./appointment-routes')

router.use('/user', userRoutes);
router.use('/role', roleRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;