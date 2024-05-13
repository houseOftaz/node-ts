import mongoose from 'mongoose';
import { database } from '../../environments/env';

export class DatabaseService {
    /* initDatabase() {
        mongoose.connect(database)
        .then( () => {
            console.log('Connected to database successfuly')
        })
    } */ 

    async initDatabase2() {
        try {
            await mongoose.connect(database)
            console.log('Working ?')
            // await autre chose
        } catch(exception) {
            console.log(exception)
        } finally {
            console.log('Connected to database successfuly')
        }
    }
}

