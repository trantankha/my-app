const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')
// /:slug => slug là tham số động sau đường dẫn sẽ vào slug
//nên để router có tham số slug ở dưới
router.post('/store', productController.store)
router.use('/create', productController.create)
router.use('/update', productController.showAll)
router.use('/trash', productController.deleted)
router.post('/handleEffect', productController.handleEffect)

router.patch('/:id/restore', productController.restoreOne)
router.put('/:id/updated', productController.update)
router.delete('/:id/delete', productController.deleteSoft)
router.delete('/:id/remove', productController.remove)
router.use('/:id/edit', productController.editing)
router.use('/', productController.index)

module.exports = router;