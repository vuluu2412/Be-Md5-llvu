"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.findAll = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.login = async (name) => {
            let users = await this.userRepository.query(`select * from users where name = '${name}'`);
            return users;
        };
        this.findByName = async (name) => {
            let users = await this.userRepository.query(`select * from users where name = '%${name}%'`);
            return users;
        };
        this.add = async (user) => {
            let users = await this.userRepository.save(user);
            return users;
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let user = req.body;
            return await this.userRepository.update({ id: id }, user);
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let users = await this.userRepository.delete(id);
            return users;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map