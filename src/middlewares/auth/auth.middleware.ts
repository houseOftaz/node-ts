import { MiddlewareInterface } from "../../interfaces/middleware/middleware.interface";
import express from "express";

export class AuthMiddleware implements MiddlewareInterface {
    action(req:express.Request, res:express.Response, next: express.NextFunction) {
        console.log("auth");
        next();
    }
};
