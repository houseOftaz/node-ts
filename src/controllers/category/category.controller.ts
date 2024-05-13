import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Category } from "../../models/category/category.model";

export class CategoryController {
    async getAllCategories(req: express.Request, res: express.Response) {
        const categories = await Category.find();
        res.json(new ResponseStructure(categories, 200));
    }

    async createCategory(req: express.Request, res: express.Response) {
        const category = new Category();
        category.name = req.body.name;
        await category.save();
        res.json(new ResponseStructure('Nouvelle catégorie créée !', 201));
    }

    async editCategory(req: express.Request, res: express.Response) {
        console.log(req.query);
        res.json(new ResponseStructure('C\'est une modification !', 200));
    }

    async getCategoryById(req: express.Request, res: express.Response) {
        console.log(req.params);
        res.json(new ResponseStructure('Récupérer une catégorie !', 200));
    }

    async deleteCategory(req: express.Request, res: express.Response) {
        res.json(new ResponseStructure('Supprimer une catégorie !', 200));
    }
}
