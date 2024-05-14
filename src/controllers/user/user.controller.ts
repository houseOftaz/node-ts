import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { User } from "../../models/user/user.model";
import { ParentController } from "../parent.controller";
export class UserController extends ParentController {
    async getAllUsers(req: any, res: express.Response) {
        console.log(req.user)
        const users = await User.find();
        res.json(new ResponseStructure(users, 200));
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = new User();
        user.firstName = req.body.first_name;
        user.lastName = req.body.lastName;
        user.bio = req.body.bio;
        user.avatar = req.body.avatar;
        user.email = req.body.email;
        user.password = await super.getCryptService().encrypt(req.body.password);
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

    async login(req: express.Request, res: express.Response) {
        let user = null;
        let code = 200;
        try {
            user = await User.find({email: req.body.email});
        } catch(e) {
            code = 404;
        }
        if (user.length === 0) {
            res.json(new ResponseStructure('User not exist !', 404));
            return;
        }

        let isValidPassword = false;

        try {
            isValidPassword = await super.getCryptService().compare(req.body.password, user[0].password);
        } catch(e) {
            res.json(new ResponseStructure('User not exist !', 404));
            return;
        }
        if (!isValidPassword) {
            res.json(new ResponseStructure('User not exist !', 404));
            return;            
        }
        res.json(new ResponseStructure(user[0].token, 200));
    }
};
