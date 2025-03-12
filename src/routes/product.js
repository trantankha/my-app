const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')
// /:slug => slug là tham số động sau đường dẫn sẽ vào slug
router.use('/:slug', productController.detail)
router.use('/', productController.index)

module.exports = router;