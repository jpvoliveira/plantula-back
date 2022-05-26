import {Router} from "express";
import * as productsController from "../controllers/productsController.js"

const productsRouter = Router();

productsRouter.get('/products', productsController.findProducts)
productsRouter.get('/product/:id', productsController.findProductsById)
productsRouter.get('/product/:type', productsController.findProductsByType)

export default productsRouter;