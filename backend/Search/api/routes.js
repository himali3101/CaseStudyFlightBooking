const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/search', controller.search)

module.exports = router;