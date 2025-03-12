const express = require('express')
const router = express.Router()
const homeController = require('../app/controllers/HomeController')
// /:slug => slug là tham số động sau đường dẫn sẽ vào slug
router.use('/:slug', homeController.show)
router.use('/', homeController.index)

module.exports = router;