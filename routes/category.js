import { Router } from "express";
import { getCategories, getCategoryByID } from "../controllers/categories.js";

const router = Router();

router.get('/', getCategories)
router.get('/:id', getCategoryByID)


export default router