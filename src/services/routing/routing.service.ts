import express from "express";
import { ArticleController } from "../../controllers/article/article.controller";
import { AuthorController } from "../../controllers/author/author.controller";
import { CategoryController } from "../../controllers/category/category.controller";
import { CommentController } from "../../controllers/comment/comment.controller";
import { AuthMiddleware } from "../../middlewares/auth/auth.middleware";
import { RouteStructure } from "../../structures/route/route.structure";
import { App } from "../app/app.service";
import { MiddlewareInterface } from "../../interfaces/middleware/middleware.interface";

export class RoutingService {
    private routes:Array<RouteStructure<any>>=[]; // typage d'array, va initialiser les routes
    initRoutes() {
        this.routes = [
            new RouteStructure<ArticleController>("get", "/article", new ArticleController(), "getAllArticles"),

            // AuthorControlleur = T dans la structure
            new RouteStructure<AuthorController>("get", "/author", new AuthorController(), "getAllAuthors", [new AuthMiddleware()]),
            new RouteStructure<AuthorController>("post", "/author", new AuthorController(), "createAuthor"),
            new RouteStructure<AuthorController>("put", "/author/:id", new AuthorController(), "editAuthor"),
            new RouteStructure<AuthorController>("get", "/author/:id", new AuthorController(), "getById"),
            new RouteStructure<AuthorController>("delete", "/author/:id", new AuthorController(), "deleteAuthor"),
            
            new RouteStructure<CategoryController>("get", "/category", new CategoryController(), "getAllCategories"),

            new RouteStructure<CommentController>("get", "/comment", new CommentController(), "getAllComments"),
        ];
        this.setControllers();
    }
    
    private setControllers() {
        // parcours l'array
        this.routes.forEach((routeStructure:RouteStructure<any>) => {
            const appExpress = App.getExpress();
            const router = express.Router();
            const controller = routeStructure.controller;
            routeStructure.middlewares.forEach((middleware:MiddlewareInterface) => {
                router[routeStructure.verb](routeStructure.path, middleware.action);
            });
            router[routeStructure.verb](routeStructure.path, controller[routeStructure.method]);
            appExpress.use("/", router);
            /*express = app
            [routeStructure.verb] = get/post
            () routeStructre.path = "/author"
            controller[routeStructure.method] = new AuthorController()
            const authorController = new authorController()
            authorController.getAllAuthors()
            */
        });
    }
}
