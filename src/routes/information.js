const express = require('express')
const router = express.Router()

const inforController = require('../app/controllers/InforController')
router.use('/:slug', inforController.show)

module.exports = router;