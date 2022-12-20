import { Request, Response } from "express";
export declare class LikeController {
    private likeService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: LikeController;
export default _default;
