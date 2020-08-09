import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';

export default class LoginController {

    async index(request: Request, response: Response) {
        const { 
            email, 
            password 
        } = request.body; 
        
        const saltRounds = 10;
        const myPlaintextPassword = 's0/\/\P4$$w0rD';
        const someOtherPlaintextPassword = 'not_bacon';

        const pswHash = bcrypt.hashSync(password, saltRounds);
        console.log(pswHash);

        let user = await db('users')
            .where('users.email', '=', email)
            .first();

        console.log(user);

        if (!bcrypt.compareSync(password, user.password))
        {
            user = null;
        }

        return response.json(user);
    }
}