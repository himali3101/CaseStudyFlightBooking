const express = require('express')
const router = express.Router()

const controller = require('../controller')
const checkAuth = require('../middleware/check-auth')

/**
 * @swagger
 * /flight/:
 *    get:
 *       description: use to get all flights
 *       responses:
 *          200: 
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.get('/', controller.getFlights);

/**
 * @swagger
 * /flight/V101:
 *    get:
 *       description: use to get flight by name
 *       responses:
 *          200:
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.get('/:flightName', controller.getFlightsByName)

/**
 * @swagger
 * /flight/add:
 *    post:
 *       description: use to add flights
 *       responses:
*          200:
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.post('/add', controller.addFlight, checkAuth.verifyToken)

/**
 * @swagger
 * /flight/V101:
 *    patch:
 *       description: use to update flights
 *       responses:
 *          200:
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.patch('/:flightName', controller.updateFlight)

/**
 * @swagger
 * /flight/update/V101:
 *    get:
 *       description: use to update complete flight object
 *       responses:
 *          200:
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.put('/update/:flightName', controller.update)

/**
 * @swagger
 * /flight/Z102:
 *    delete:
 *       description: use to delete flights
 *       responses:
 *          200:
 *              description: A successful response
 *          404:
 *              description:  No Flights available
 */
router.delete('/:flightName', controller.cancelFlight)

module.exports = router
