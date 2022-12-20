"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_service_1 = require("../service/post-service");
class PostController {
    constructor() {
        this.getAll = async (req, res) => {
            let posts = await this.postService.findAll();
            return res.status(200).json(posts);
        };
        this.finByName = async (req, res) => {
            let post = req.body;
            let postFind = await this.postService.findByName(post.title);
            return res.status(201).json(postFind);
        };
        this.add = async (req, res) => {
            let posts = await this.postService.add(req, res);
            return res.status(200).json(posts);
        };
        this.edit = async (req, res) => {
            let posts = await this.postService.edit(req, res);
            return res.status(200).json(posts);
        };
        this.delete = async (req, res) => {
            let posts = await this.postService.delete(req, res);
            return res.status(200).json(posts);
        };
        this.postService = new post_service_1.PostService();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=post-controller.js.map