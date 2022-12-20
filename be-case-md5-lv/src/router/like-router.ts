import {Router} from "express";
import postLikeController from "../controller/like-controller";

export const likeRouter = Router()
likeRouter.get('',postLikeController.getAll);
likeRouter.post('/add',postLikeController.add) ;