import { Request, Response } from "express";
export declare class PostService {
    private postRepository;
    constructor();
    findAll: () => Promise<any>;
    findByName: (title: any) => Promise<any>;
    add: (req: Request, res: Response) => Promise<any>;
    edit: (req: Request, res: Response) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<any>;
}
declare const _default: PostService;
export default _default;
