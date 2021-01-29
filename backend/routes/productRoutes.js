import express from 'express';
import { getAllProducts, getProductById } from '../controller/products.js';

const router = express.Router();

// GET all products from db
//@route GET /api/products

router.get('/', getAllProducts);
router.get('/:id', getProductById);


export default router;