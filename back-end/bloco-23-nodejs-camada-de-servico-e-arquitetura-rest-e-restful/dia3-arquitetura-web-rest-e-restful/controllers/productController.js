const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

const HTTP_OK_STATUS = 200;
const INTERNAL_ERROR = 500;

router.get('/products', async (_req, res) => {
  try {
    const products = await ProductModel.getAll();
    res.status(HTTP_OK_STATUS).json(products);
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
});

router.get('/products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

router.post('/user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.delete('/user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.put('/user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;