import { Router } from "express";
import productsRouter from "./productsRouter.js"
import  usersRouter from "./usersRouter.js"

const router = Router()

router.use(productsRouter)
router.use(usersRouter)

export default router;