import { App } from "../../services/app/app.service";
import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Author } from "../../models/author/author.model";

export class AuthorController {
    async getAllAuthors(req:express.Request, res:express.Response) {
        const authors = await Author.find()
        res.json(new ResponseStructure(authors, 404));
    }

    async createAuthor(req:express.Request, res:express.Response) {
        const author = new Author();
        author.firstName = req.body.first_name;
        await author.save();
        res.json(new ResponseStructure('Hello it\'s a post !', 404));
    }

    editAuthor(req:express.Request, res:express.Response) {
        console.log(req.query)
        res.json(new ResponseStructure('it\'s a put !', 404));
    }

    getById(req:express.Request, res:express.Response) {
        console.log(req.params)
        res.json(new ResponseStructure('it get one author !', 404));
    }
    
    deleteAuthor(req:express.Request, res:express.Response) {
        res.json(new ResponseStructure('it delete one author !', 404));
    }
}
