import {Router} from "express";
import {postRouter} from "./post-router";
import {userRouter} from "./user-router";
import {likeRouter} from "./like-router";
import {commentRouter} from "./comment-router";


export const router= Router();
router.use('/posts',postRouter);
router.use('/auth',userRouter);
router.use('/post-like', likeRouter);
router.use('/post-comment', commentRouter);

