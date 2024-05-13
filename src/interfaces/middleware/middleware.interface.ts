import express from "express";

export interface MiddlewareInterface {
    action(req:express.Request, res:express.Response, next: express.NextFunction):void;
}
