const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router
  .get('/products', productController.getAll)
  .get('/products/:id', productController.getProductById)
  .post('/products', productController.addNewProduct)
  .delete('/products/:id', productController.deleteById)
  .put('/products/:id', productController.update);

module.exports = router;