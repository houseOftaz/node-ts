import { App } from "../../services/app/app.service";
import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Author } from "../../models/author/author.model";

export class AuthorController {
    async getAllAuthors(req:express.Request, res:express.Response) {
        const authors = await Author.find(/*{firstName: { $regex:  'gui', $options: 'i' }}*/);
        res.json(new ResponseStructure(authors, 200));
    }

    async createAuthor(req:express.Request, res:express.Response) {
        const author = new Author();
        author.firstName = req.body.first_name;
        // AJOUTER LES AUTRES CHAMPS sauf createDate et updateDate
        await author.save();
        res.json(new ResponseStructure('Hello it\'s a post !', 200));
    }

    async editAuthor(req:express.Request, res:express.Response) {
        let author = null;
        let code = 200;
        try {
            author = await Author.findById(req.params.id);
        } catch(e) {

        }
        if (author === null) {
            res.json(new ResponseStructure(null, 404));
            return;       
        }
        author.firstName = req.body.first_name;
        author.updatedAt = new Date();
        // AJOUTER LES AUTRES CHAMPS
        await Author.updateOne({_id: author._id}, author);
        res.json(new ResponseStructure(author, 200));
    }

    async getById(req:express.Request, res:express.Response) {
        // console.log(req.params);
        let author = null;
        let code = 200;
        try {
            author = await Author.findById(req.params.id);
        } catch(e) {
            code = 404;
        }
        res.json(new ResponseStructure(author, code));
    }
    
    async deleteAuthor(req:express.Request, res:express.Response) {
        let author = null;
        let code = 200;
        try {
            author = await Author.findById(req.params.id);
        } catch(e) {

        }
        if (author === null) {
            res.json(new ResponseStructure(null, 404));
            return;       
        }
        await Author.deleteOne({_id: author._id})
        res.json(new ResponseStructure('it delete one author !', 200));
    }
}
