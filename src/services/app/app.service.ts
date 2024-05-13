import express from "express";
import { RoutingService } from "../routing/routing.service";
import { DatabaseService } from "../database/database.service";

export class AppService {
    private appExpress:express.Application = null;
    // private = spécifique a ts pour rendre la variable privée a la class
    private port:number = 3000;
    // méthode qui initialise l'app
    initApp(app: express.Application) {
        app.use(express.json());  // dis a express qu'on renvois du code json
        // on instancie app
        this.appExpress = app;
        this.initServer()
        const routingService = new RoutingService();
        routingService.initRoutes();
        const databaseService = new DatabaseService();
        databaseService.initDatabase2(); // !
    }
    // methode
    private initServer():void {
        this.appExpress.listen(this.port);
    }
    // méthode retourn le type
    getExpress():express.Application {
        return this.appExpress;
    }
}

export const App = new AppService();
