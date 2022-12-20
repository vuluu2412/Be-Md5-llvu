import {Router} from "express";
import userController  from "../controller/user-controller";

export const userRouter = Router();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/users', userController.getAll);
userRouter.put('/:id',userController.edit);
userRouter.delete('/:id',userController.delete);
userRouter.post('/find-by-name',userController.finByName);
