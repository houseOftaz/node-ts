import express from "express";
import { App } from "../app/app.service";
import { RouteStructure } from "../../structures/route/route.structure";
import { ArticleController } from "../../controllers/article/article.controller";
import { AuthorController } from "../../controllers/author/author.controller";
import { CategoryController } from "../../controllers/category/category.controller";
import { CommentController } from "../../controllers/comment/comment.controller";
import { MediaController } from "../../controllers/media/media.controller";
import { UserController } from "../../controllers/user/user.controller";
import { AuthMiddleware } from "../../middlewares/auth/auth.middleware";
import { MiddlewareInterface } from "../../interfaces/middleware/middleware.interface";

export class RoutingService {
    private routes:Array<RouteStructure<any>>=[]; // typage d'array, va initialiser les routes
    initRoutes() {
        this.routes = [
            // ArticleControlleur = T dans la structure
            new RouteStructure<ArticleController>("get", "/article", new ArticleController(), "getAllArticles"),
            new RouteStructure<ArticleController>("post", "/article", new ArticleController(), "createArticle"),
            new RouteStructure<ArticleController>("put", "/article/:id", new ArticleController(), "editArticle"),
            new RouteStructure<ArticleController>("get", "/article/:id", new ArticleController(), "getById"),
            new RouteStructure<ArticleController>("delete", "/article/:id", new ArticleController(), "deleteArticle"),

            // AuthorControlleur
            new RouteStructure<AuthorController>("get", "/author", new AuthorController(), "getAllAuthors", [new AuthMiddleware()]),
            new RouteStructure<AuthorController>("post", "/author", new AuthorController(), "createAuthor"),
            new RouteStructure<AuthorController>("put", "/author/:id", new AuthorController(), "editAuthor"),
            new RouteStructure<AuthorController>("get", "/author/:id", new AuthorController(), "getById"),
            new RouteStructure<AuthorController>("delete", "/author/:id", new AuthorController(), "deleteAuthor"),
            
            new RouteStructure<CategoryController>("get", "/category", new CategoryController(), "getAllCategories"),
            new RouteStructure<CategoryController>("post", "/category", new CategoryController(), "createCategory"),
            new RouteStructure<CategoryController>("put", "/category/:id", new CategoryController(), "editCategory"),
            new RouteStructure<CategoryController>("get", "/category/:id", new CategoryController(), "getById"),
            new RouteStructure<CategoryController>("delete", "/category/:id", new CategoryController(), "deleteCategory"),

            new RouteStructure<CommentController>("get", "/comment", new CommentController(), "getAllComments"),
            new RouteStructure<CommentController>("post", "/comment", new CommentController(), "createComment"),
            new RouteStructure<CommentController>("put", "/comment/:id", new CommentController(), "editComment"),
            new RouteStructure<CommentController>("get", "/comment/:id", new CommentController(), "getById"),
            new RouteStructure<CommentController>("delete", "/comment/:id", new CommentController(), "deleteComment"),

            new RouteStructure<MediaController>("get", "/media", new MediaController(), "getAllMedias"),
            new RouteStructure<MediaController>("post", "/media", new MediaController(), "createMedia"),
            new RouteStructure<MediaController>("put", "/Media/:id", new MediaController(), "editMedia"),
            new RouteStructure<MediaController>("get", "/Media/:id", new MediaController(), "getById"),
            new RouteStructure<MediaController>("delete", "/Media/:id", new MediaController(), "deleteMedia"),

            new RouteStructure<UserController>("get", "/user", new UserController(), "getAllUsers"),
            new RouteStructure<UserController>("post", "/user", new UserController(), "createUser"),
            new RouteStructure<UserController>("put", "/user/:id", new UserController(), "editUser"),
            new RouteStructure<UserController>("get", "/user/:id", new UserController(), "getById"),
            new RouteStructure<UserController>("delete", "/user/:id", new UserController(), "deleteUser"),
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
