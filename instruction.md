

FAIRE :
    async createAuthor(req:express.Request, res:express.Response) {
        const author = new Author();
        author.firstName = req.body.first_name;
        await author.save();
        res.json(new ResponseStructure('Hello it\'s a post !', 404));

get all et model 


CRUD
create read update delete
come un forulaire !



INFO
-----

const toto:any = {}
console.log(toto)

toto.tata = () => {
    return true
}
console.log(toto)

toto["titi"] = true
console.log(toto["tata"]())
console.log(toto.tata())
