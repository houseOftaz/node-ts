import bcrypt from 'bcryptjs';

const SALT: number = 10;

export class CryptService {
    async encrypt(password: string): Promise<string> {
        const encryptPassword = await bcrypt.hash(password, SALT);
        return encryptPassword;
    }
    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}