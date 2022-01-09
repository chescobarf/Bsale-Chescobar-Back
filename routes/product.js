import { Router } from "express";
import { getProducts, getProductsByID, getProductsByCategories } from "../controllers/product.js";

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductsByID)
router.get('/category/:id', getProductsByCategories)


export default router