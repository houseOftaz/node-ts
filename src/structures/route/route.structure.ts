// objet route
export class RouteStructure<T> {  // T pour typage dynamique
    verb:"get"|"post"|"put"|"patch"|"delete";
    path:string;
    controller:T;
    method:string;
    constructor(verb:"get"|"post"|"put"|"patch"|"delete", path:string, controller:T, method:string) {
        this.verb = verb;
        this.path = path;
        this.controller = controller;
        this.method = method;
    }
}
