const { getAllProduct} = require('../controllers/product.controller.js');
const express = require('express');
const { _insterProduct } = require('../models/products.model.js');

const router = express.Router();


router.get('/api/products', getAllProduct);

/**insert a product - post */
router.post(/api/products, _insterProduct)



module.exports = {
    router
};