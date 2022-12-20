import { Request, Response } from "express";
export declare class CommentService {
    private commentRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<any>;
}
