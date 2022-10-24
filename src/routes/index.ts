import { NextFunction, Request, Response, Router } from "express";
import userRouter from "./user/user.route";

const router = Router();

router
    .get('/ping', (req: Request, res: Response, next: NextFunction) => {
        res.send({
            message: 'Pong!'
        });
        next();
    });

router.use(userRouter);

export default router;