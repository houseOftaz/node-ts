import { MiddlewareInterface } from "../../interfaces/middleware/middleware.interface";
import express from "express";
import { User } from "../../models/user/user.model";
import { ResponseStructure } from "../../structures/response/response.structure";

export class AuthMiddleware implements MiddlewareInterface {
    async action(req:any, res:express.Response, next: express.NextFunction) {
        console.log(req.headers.authorization);
        let user = null;
        let code = 200;
        try {
            user = await User.find({token: req.headers.authorization});
        } catch(e) {
            code = 404;
        }
        if (user.length === 0) {
            res.json(new ResponseStructure('FORBIDEN go out', 403));
            return;
        }
        req.user = user[0];
        next();
    }
};
