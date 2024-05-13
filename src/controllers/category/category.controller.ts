import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";

export class CategoryController {
    getAllCategories(req:express.Request, res:express.Response) {
        res.json(new ResponseStructure('Hello dear reader !', 404));
    }
}
