// juste un objet
export class ResponseStructure {
    message:any = '';
    code:number = 200;
    constructor(message:any, code:number) {
        this.message = message;
        this.code = code;
    }
}
