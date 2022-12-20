import {Router} from "express";
import postController from "../controller/post-controller";

export const postRouter = Router();
postRouter.get('',postController.getAll);
postRouter.post('/add', postController.add);
postRouter.put('/:id',postController.edit);
postRouter.delete('/:id',postController.delete);
postRouter.get('/find-by-name',postController.finByName);

