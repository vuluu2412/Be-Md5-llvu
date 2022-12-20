import {AppDataSource} from "../data-source";
import {User} from "../model/user";
import { Request, Response} from "express";

export class UserService{
    private userRepository:any;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findAll = async ()=>{
        let users = await this.userRepository.find();
        return users
    }
    login = async (name)=>{
        let users = await this.userRepository.query(`select * from users where name = '${name}'`)
        return users
    }
    findByName = async (name)=>{
        let users = await this.userRepository.query(`select * from users where name = '%${name}%'`)
        return users
    }
    add = async (user)=>{
        let users = await this.userRepository.save(user)
        return users
    }
    edit = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let user = req.body;
       return  await this.userRepository.update({id:id},user);
    }
    delete = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let users =await this.userRepository.delete(id);
        return users
    }
}