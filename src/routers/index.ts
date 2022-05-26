import { Router } from "express";
import ordersRouter from "./ordersRouter.js";
import productsRouter from "./productsRouter.js"
import  usersRouter from "./usersRouter.js"

const router = Router()

router.use(productsRouter)
router.use(usersRouter)
router.use(ordersRouter)

export default router;