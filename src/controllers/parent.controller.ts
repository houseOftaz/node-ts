import { CryptService } from "../services/crypt/crypt.service";

export class ParentController {
    getCryptService() {
        return new CryptService();

    }
}


// class parent instancie automatiquement cryptService
// private exclusif a la class parent
