const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/b', controller.getBooking)

module.exports = router