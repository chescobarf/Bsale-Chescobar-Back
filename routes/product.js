import { Router } from "express";
import { getProducts, getProductsByID, getProductsByCategories, getProductsBySearch } from "../controllers/product.js";

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductsByID)
router.get('/category/:id', getProductsByCategories)
router.get('/search/:term', getProductsBySearch)



export default router