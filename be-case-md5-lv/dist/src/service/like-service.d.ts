import { Request, Response } from "express";
export declare class LikeService {
    private postLikeRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<any>;
}
