"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/register', user_controller_1.default.register);
exports.userRouter.post('/login', user_controller_1.default.login);
exports.userRouter.get('/users', user_controller_1.default.getAll);
exports.userRouter.put('/:id', user_controller_1.default.edit);
exports.userRouter.delete('/:id', user_controller_1.default.delete);
exports.userRouter.post('/find-by-name', user_controller_1.default.finByName);
//# sourceMappingURL=user-router.js.map