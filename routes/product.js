import { Router } from "express";
import { getProducts, getProductsByID } from "../controllers/product.js";

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductsByID)


export default router