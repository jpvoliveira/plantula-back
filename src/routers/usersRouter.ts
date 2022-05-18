import {Router} from "express";
import * as usersController from "../controllers/usersController.js"

const usersRouter = Router();

usersRouter.post('/sign-up', usersController.signUp)
usersRouter.post('/sign-in', usersController.signIn)
usersRouter.get('/finduser', usersController.findUser)

export default usersRouter;