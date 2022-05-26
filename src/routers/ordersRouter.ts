import {Router} from "express";
import * as ordersController from "../controllers/ordersController.js"

const ordersRouter = Router();

ordersRouter.post('/order', ordersController.postOrder)

export default ordersRouter;