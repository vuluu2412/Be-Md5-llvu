import {Router} from "express";
import commentController from "../controller/comment-controller";

export const commentRouter = Router();
commentRouter.get('',commentController.getAll);
commentRouter.post('/add',commentController.add);