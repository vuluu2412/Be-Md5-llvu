"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.login(user.name);
            if (userFind.length) {
                res.status(200).json({
                    mess: "Tài khoản đã tồn tại!!! ",
                });
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                let users = await this.userService.add(user);
                return res.status(201).json(users);
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.login(user.name);
            if (userFind.length == 0) {
                return res.status(200).json({
                    massage: 'username or password wrong!!'
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind[0].password);
                if (!comparePassword) {
                    return res.json({
                        massage: 'Mật khẩu sai'
                    });
                }
                else {
                    let payload = {
                        id: userFind[0].id,
                        name: userFind[0].name
                    };
                    let secret = 'ha';
                    let token = await jsonwebtoken_1.default.sign(payload, secret, {
                        expiresIn: 36000
                    });
                    return res.json({
                        token: token,
                        id: userFind[0].id,
                        userName: userFind[0].name
                    });
                }
            }
        };
        this.finByName = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.findByName(user.name);
            return res.status(201).json(userFind[0]);
        };
        this.getAll = async (req, res) => {
            let users = await this.userService.findAll();
            return res.status(200).json(users);
        };
        this.edit = async (req, res) => {
            await this.userService.edit(req, res);
            return res.status(201).json({
                message: "edit success"
            });
        };
        this.delete = async (req, res) => {
            let users = await this.userService.delete(req, res);
            return res.status(200).json(users);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map