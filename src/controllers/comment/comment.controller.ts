import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Comment } from "../../models/comment/comment.model";

export class CommentController {
    async getAllComments(req: express.Request, res: express.Response) {
        const comments = await Comment.find();
        res.json(new ResponseStructure(comments, 200));
    }

    async createComment(req: express.Request, res: express.Response) {
        const comment = new Comment();
        comment.name = req.body.name;
        await comment.save();
        res.json(new ResponseStructure('Nouveau commentaire créé !', 201));
    }

    async editComment(req: express.Request, res: express.Response) {
        console.log(req.query);
        res.json(new ResponseStructure('C\'est une modification de commentaire !', 200));
    }

    async getById(req: express.Request, res: express.Response) {
        console.log(req.params);
        res.json(new ResponseStructure('Récupérer un commentaire !', 200));
    }

    async deleteComment(req: express.Request, res: express.Response) {
        res.json(new ResponseStructure('Supprimer un commentaire !', 200));
    }
}
