"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const data_source_1 = require("../data-source");
const post_1 = require("../model/post");
class PostService {
    constructor() {
        this.findAll = async () => {
            let posts = await this.postRepository.find();
            return posts;
        };
        this.findByName = async (title) => {
            let posts = await this.postRepository.query(`select * from posts where title like '%${title}%'`);
            return posts;
        };
        this.add = async (req, res) => {
            let post = req.body;
            let posts = await this.postRepository.save(post);
            return posts;
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let post = req.body;
            let posts = await this.postRepository.update({ id: id }, post);
            return posts;
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let posts = await this.postRepository.delete(id);
            return posts;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success!');
            this.postRepository = connection.getRepository(post_1.Post);
        });
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.PostService = PostService;
exports.default = new PostService();
//# sourceMappingURL=post-service.js.map