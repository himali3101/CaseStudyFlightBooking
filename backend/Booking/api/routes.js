const express = require('express')
const router = express.Router()

const controller = require('./controller')
const checkAuth = require('./middleware/check-auth')

router.post('/flight', checkAuth.verifyToken, controller.getBooking)
router.get('/:flightName/:email', controller.showBooking)

module.exports = router