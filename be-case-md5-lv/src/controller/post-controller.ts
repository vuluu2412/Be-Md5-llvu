import {PostService} from "../service/post-service";
import {Request, Response} from "express";

export class PostController{
    private postService: PostService
    constructor() {
        this.postService= new PostService();
    }
    getAll = async (req:Request,res:Response)=>{
        let posts = await this.postService.findAll();
        return res.status(200).json(posts);
    }
    finByName =async (req:Request,res:Response)=>{
        let post = req.body;
        let postFind = await this.postService.findByName(post.title);
        return res.status(201).json(postFind)
    }
    add = async (req:Request,res:Response)=>{
        let posts= await this.postService.add(req,res);
        return res.status(200).json(posts);
    }

    edit = async  (req:Request,res:Response)=>{
        let posts =  await this.postService.edit(req,res);
        return res.status(200).json(posts);
    }
    delete= async  (req:Request,res:Response)=>{
        let posts= await this.postService.delete(req,res);
        return res.status(200).json(posts)
    }
}
export default new PostController();