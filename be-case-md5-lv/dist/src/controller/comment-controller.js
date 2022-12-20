"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const comment_service_1 = require("../service/comment-service");
class CommentController {
    constructor() {
        this.getAll = async (req, res) => {
            let comments = await this.commentService.findAll(req, res);
            return res.status(200).json(comments);
        };
        this.add = async (req, res) => {
            let comments = await this.commentService.add(req, res);
            return res.status(200).json(comments);
        };
        this.commentService = new comment_service_1.CommentService();
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=comment-controller.js.map