import {Request, Response} from "express";
import {CommentService} from "../service/comment-service";

export class CommentController{
    private commentService: CommentService;
    constructor() {
        this.commentService = new CommentService()
    }
    getAll = async (req:Request,res:Response)=>{
        let comments = await this.commentService.findAll(req,res);
        return res.status(200).json(comments);
    }

    add = async (req:Request,res:Response)=>{
        let comments= await this.commentService.add(req,res);
        return res.status(200).json(comments);
    }

}

export default new CommentController();