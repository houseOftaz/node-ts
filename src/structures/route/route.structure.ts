import { MiddlewareInterface } from "../../interfaces/middleware/middleware.interface";

// objet route
export class RouteStructure<T> {  // T pour typage dynamique
    verb:"get"|"post"|"put"|"patch"|"delete";
    path:string;
    controller:T;
    method:string;
    middlewares:Array<MiddlewareInterface>;
    constructor(verb:"get"|"post"|"put"|"patch"|"delete", path:string, controller:T, method:string, middlewares:Array<MiddlewareInterface>=[]) {
        this.verb = verb;
        this.path = path;
        this.controller = controller;
        this.method = method;
        this.middlewares = middlewares;
    }
}
