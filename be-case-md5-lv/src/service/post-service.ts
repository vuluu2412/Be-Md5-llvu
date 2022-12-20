import {AppDataSource} from "../data-source";
import {Post} from "../model/post";
import {Request, Response} from "express";


export class PostService{
    private postRepository: any;
    constructor() {
        AppDataSource.initialize().then(connection=>{
            console.log('Connect Database Success!')
            this.postRepository = connection.getRepository(Post);
        })
        this.postRepository= AppDataSource.getRepository(Post);
    }
    findAll = async ()=>{
        let posts = await this.postRepository.find();
       return posts
    }
    findByName = async (title)=>{
        let posts = await this.postRepository.query(`select * from posts where title like '%${title}%'`)
        return posts
    }
    add = async (req:Request,res:Response)=>{
        let post = req.body;
        let posts = await this.postRepository.save(post)
        return posts
    }
    edit = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let post = req.body;
        let posts= await this.postRepository.update({id:id},post);
        return posts
    }
    delete = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let posts =await this.postRepository.delete(id);
        return posts
    }
}

export default new PostService();
