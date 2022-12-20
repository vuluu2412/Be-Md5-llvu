"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = require("express");
const comment_controller_1 = __importDefault(require("../controller/comment-controller"));
exports.commentRouter = (0, express_1.Router)();
exports.commentRouter.get('', comment_controller_1.default.getAll);
exports.commentRouter.post('/add', comment_controller_1.default.add);
//# sourceMappingURL=comment-router.js.map