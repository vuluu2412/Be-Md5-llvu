"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async (req, res) => {
            let likes = await this.postLikeRepository.find();
            return res.status(200).json(likes);
        };
        this.add = async (req, res) => {
            let like = req.body;
            let likes = await this.postLikeRepository.save(like);
            return likes;
        };
        this.postLikeRepository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=like-service.js.map