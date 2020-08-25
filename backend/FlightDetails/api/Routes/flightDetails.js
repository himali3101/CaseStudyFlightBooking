const express = require('express')
const router = express.Router()

const controller = require('../controller')


router.get('/', controller.getFlights);

router.get('/:flightId', controller.getFlightsById)

router.post('/add', controller.addFlight)

router.patch('/:flightId', controller.updateFlight)

router.delete('/:flightId', controller.cancelFlight)

module.exports = router
