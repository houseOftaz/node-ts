import express from "express";
import { ResponseStructure } from "../../structures/response/response.structure";
import { Media } from "../../models/media/media.model";

export class MediaController {
    async getAllMedias(req: express.Request, res: express.Response) {
        const medias = await Media.find();
        res.json(new ResponseStructure(medias, 200));
    }

    async createMedia(req: express.Request, res: express.Response) {
        const media = new Media();
        media.name = req.body.name;
        // Set other properties of the media as needed
        await media.save();
        res.json(new ResponseStructure('Nouveau média créé !', 201));
    }

    async editMedia(req: express.Request, res: express.Response) {
        console.log(req.query);
        res.json(new ResponseStructure('C\'est une modification de média !', 200));
    }

    async getById(req: express.Request, res: express.Response) {
        console.log(req.params);
        res.json(new ResponseStructure('Récupérer un média !', 200));
    }

    async deleteMedia(req: express.Request, res: express.Response) {
        res.json(new ResponseStructure('Supprimer un média !', 200));
    }
}
