const express = require('express')
const router = express.Router()

const controller = require('./controller')
const checkAuth = require('./middleware/check-auth')

router.post('/flight', controller.getBooking, checkAuth.verifyToken)
router.get('/:email', controller.showBooking)
router.get("/", controller.getAllBookings)

module.exports = router