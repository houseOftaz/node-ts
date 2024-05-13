import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Article } from "../../models/article/article.model";

export class ArticleController {
    async getAllArticles(req: express.Request, res: express.Response) {
        const articles = await Article.find();
        res.json(new ResponseStructure(articles, 200));
    }

    async createArticle(req: express.Request, res: express.Response) {
        const article = new Article();
        article.title = req.body.title;
        // Set other properties of the article as needed
        await article.save();
        res.json(new ResponseStructure('Nouvel article créé !', 201));
    }

    async editArticle(req: express.Request, res: express.Response) {
        console.log(req.query);
        res.json(new ResponseStructure('C\'est une modification d\'article !', 200));
    }

    async getArticleById(req: express.Request, res: express.Response) {
        console.log(req.params);
        res.json(new ResponseStructure('Récupérer un article !', 200));
    }

    async deleteArticle(req: express.Request, res: express.Response) {
        res.json(new ResponseStructure('Supprimer un article !', 200));
    }
}
