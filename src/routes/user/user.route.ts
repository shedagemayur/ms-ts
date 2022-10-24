import { NextFunction, Request, Response, Router } from "express";
import User from "../../controllers/user.controller";

const userRouter = Router();

userRouter
    .get('/users', (req: Request, res: Response) => {
        res.send(new User().getUsers());
    })
    .get('/user', (req: Request, res: Response) => {
        const r_uid = req.query.uid;
        const id = Number(r_uid);

        res.send(new User().getUser(id));
    });

export default userRouter;