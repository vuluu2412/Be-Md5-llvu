import {AppDataSource} from "../data-source";
import {Like} from "../model/like";
import {Request, Response} from "express";

export class LikeService {
    private postLikeRepository: any;
    constructor() {
        this.postLikeRepository = AppDataSource.getRepository(Like);
    }
    findAll = async (req: Request, res: Response) => {
        let likes = await this.postLikeRepository.find();
        return res.status(200).json(likes);
    }
    add = async (req:Request,res:Response)=>{
        let like = req.body;
        let likes = await this.postLikeRepository.save(like)
        return likes
    }
}