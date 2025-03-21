const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')
// /:slug => slug là tham số động sau đường dẫn sẽ vào slug
router.use('/create', productController.create)
router.use('/update', productController.show)
router.post('/store', productController.store)
router.use('/:id/edit', productController.edit)
router.put('/:id/updated', productController.update)
router.use('/', productController.index)

module.exports = router;