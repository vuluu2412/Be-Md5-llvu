"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const post_router_1 = require("./post-router");
const user_router_1 = require("./user-router");
const like_router_1 = require("./like-router");
const comment_router_1 = require("./comment-router");
exports.router = (0, express_1.Router)();
exports.router.use('/posts', post_router_1.postRouter);
exports.router.use('/auth', user_router_1.userRouter);
exports.router.use('/post-like', like_router_1.likeRouter);
exports.router.use('/post-comment', comment_router_1.commentRouter);
//# sourceMappingURL=router.js.map