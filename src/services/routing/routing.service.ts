import { AuthorController } from "../../controllers/author/author.controller";
import { CategoryController } from "../../controllers/category/category.controller";
import { RouteStructure } from "../../structures/route/route.structure";
import { App } from "../app/app.service";

export class RoutingService {
    private routes:Array<RouteStructure<any>>=[]; // typage d'array, va initialiser les routes
    initRoutes() {
        this.routes = [
            // AuthorControlleur = T dans la structure
            new RouteStructure<AuthorController>("get", "/author", new AuthorController(), "getAllAuthors"),
            new RouteStructure<AuthorController>("post", "/author", new AuthorController(), "createAuthor"),
            new RouteStructure<AuthorController>("put", "/author/:id", new AuthorController(), "editAuthor"),
            new RouteStructure<AuthorController>("get", "/author/:id", new AuthorController(), "getById"),
            new RouteStructure<AuthorController>("delete", "/author/:id", new AuthorController(), "deleteAuthor"),
            
            new RouteStructure<CategoryController>("get", "/category", new CategoryController(), "getAllCategories")
        ];
        this.setControllers();
    }
    private setControllers() {
        // parcours l'array
        this.routes.forEach((routeStructure:RouteStructure<any>) => {
            const express = App.getExpress();
            const controller = routeStructure.controller;
            const toto = "quelque chose";
            console.log(toto[0]) // 0 sera le q car tout string est tableau !
            console.log(routeStructure)
            express[routeStructure.verb](routeStructure.path, controller[routeStructure.method])
            /*express = app
            [routeStructure.verb] = get/post
            () routeStructre.path = "/author"
            controller[routeStructure.method] = new AuthorController()
            const authorController = new authorController()
            authorController.getAllAuthors()
            */
        })
    }
}
