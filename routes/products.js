const { Router } = require('express');
const router = Router();

const { getProducts, createProduct, updateProduct, deleteProduct, getProduct } = require('../controllers/products.controller')

router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProduct)


module.exports = router;