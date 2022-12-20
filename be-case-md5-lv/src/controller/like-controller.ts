import {Request, Response} from "express";
import {LikeService} from "../service/like-service";

export class LikeController{
    private likeService: LikeService
    constructor() {
        this.likeService= new LikeService();
    }
    getAll = async (req:Request,res:Response)=>{
        let likes = await this.likeService.findAll(req,res);
        return res.status(200).json(likes);
    }

    add = async (req:Request,res:Response)=>{
        let likes= await this.likeService.add(req,res);
        return res.status(200).json(likes);
    }
}
export default new LikeController();