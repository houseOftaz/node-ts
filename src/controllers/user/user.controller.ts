import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { User } from "../../models/user/user.model";

export class UserController {
    async getAllUsers(req: express.Request, res: express.Response) {
        const users = await User.find();
        res.json(new ResponseStructure(users, 200));
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = new User();
        user.firstName = req.body.firstName;
        await user.save();
        res.json(new ResponseStructure('Nouvel utilisateur créée !', 201));
    }

    async editUser(req: express.Request, res: express.Response) {
        console.log(req.query);
        res.json(new ResponseStructure('C\'est une modification !', 200));
    }

    async getUserById(req: express.Request, res: express.Response) {
        console.log(req.params);
        res.json(new ResponseStructure('Récupérer un user !', 200));
    }

    async deleteUser(req: express.Request, res: express.Response) {
        res.json(new ResponseStructure('Supprimer un user !', 200));
    }
};
