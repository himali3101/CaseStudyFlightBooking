const express = require('express')
const router = express.Router()
const controller = require('./controller')

/**
 * @swagger
 * /flight/search:
 *    post:
 *       description: use to search flight based on from to and departure date
 *       responses:
 *          200: A successful response
 */
router.post('/search', controller.search)

module.exports = router;