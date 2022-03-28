const ProductModel = require('../models/productModel');

const HTTP_OK_STATUS = 200;
const INTERNAL_ERROR = 500;
const CREATED_STATUS = 201;

// router.get('/products', async (_req, res) => {
//   try {
//     const products = await ProductModel.getAll();
//     return res.status(HTTP_OK_STATUS).json(products);
//   } catch (error) {
//     console.log(error);
//     return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
//   }
// });

const getAll = async (_req, res) => {
  try {
    const products = await ProductModel.getAll();
    return res.status(HTTP_OK_STATUS).json(products);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
};

// router.get('/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await ProductModel.getById(id);
//     return res.status(HTTP_OK_STATUS).json(product);
//   } catch (error) {
//     console.log(error);
//     return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
//   }
// });

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.getById(id);
    return res.status(HTTP_OK_STATUS).json(product);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
};

// router.post('/user', async (req, res) => {
//   try {
//     const newProduct = await ProductModel.add(req.body);
//     res.status(CREATED_STATUS).json(newProduct);
//   } catch (error) {
//     console.log(error);
//     return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
//   }
// });

const addNewProduct = async (req, res) => {
  try {
    const newProduct = await ProductModel.add(req.body);
    res.status(CREATED_STATUS).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
};

// router.delete('/user/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await ProductModel.exclude(id);
//     res.status(200).end();
//   } catch (error) {
//     console.log(error);
//     return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
//   }
// });

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.exclude(id);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
};

// router.put('/user/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await ProductModel.update(id, ...req.body);
//     res.status(200).json(products);
//   } catch (error) {
//     console.log(error);
//     return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
//   }
// });

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.update(id, ...req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_ERROR).json({ message: 'Ops, alguma coisa deu errado! :(' });
  }
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
  deleteById,
  update
};