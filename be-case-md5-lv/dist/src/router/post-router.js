"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controller/post-controller"));
exports.postRouter = (0, express_1.Router)();
exports.postRouter.get('', post_controller_1.default.getAll);
exports.postRouter.post('/add', post_controller_1.default.add);
exports.postRouter.put('/:id', post_controller_1.default.edit);
exports.postRouter.delete('/:id', post_controller_1.default.delete);
exports.postRouter.get('/find-by-name', post_controller_1.default.finByName);
//# sourceMappingURL=post-router.js.map