const express = require('express')
const router = express.Router()

const controller = require('../controller')
const checkAuth = require('../middleware/check-auth')


router.get('/', controller.getFlights);

router.get('/:flightName', controller.getFlightsByName)

router.post('/add', checkAuth.verifyToken, controller.addFlight)

router.patch('/:flightName', controller.updateFlight)

router.delete('/:flightId', controller.cancelFlight)

module.exports = router
