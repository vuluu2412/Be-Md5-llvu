import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";
import {Request, Response} from "express";

export class CommentService{
    private commentRepository: any;
    constructor() {
            this.commentRepository =AppDataSource.getRepository(Comment);
    }
    findAll = async (req:Request,res:Response)=>{
        let comments = await this.commentRepository.find();
            return res.status(200).json(comments);
    }
    add = async (req:Request,res:Response)=>{
        let comment = req.body;
        let comments = await this.commentRepository.save(comment)
        return comments
    }
}