const express = require('express')
const router = express.Router()

const controller = require('./controller')
const checkAuth = require('./middleware/check-auth')

/**
 * @swagger
 * /book/flight:
 *    post:
 *       description: use to book a flight
 *       responses:
 *          200: A successful response
 */
router.post('/flight', controller.getBooking, checkAuth.verifyToken)

/**
 * @swagger
 * /flight/punts@gmail.com:
 *    get:
 *       description: use to get booked flights by passenger's email
 *       responses:
 *          200: A successful response
 */
router.get('/:email', controller.showBooking)

/**
 * @swagger
 * /flight/:
 *    get:
 *       description: use to get all booked fight details
 *       responses:
 *          200: A successful response
 */
router.get("/", controller.getAllBookings)

module.exports = router