import { Request, Response } from "express";
export declare class CommentController {
    private commentService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CommentController;
export default _default;
