import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';

export default class LoginController {

    async index(request: Request, response: Response) {
        const { 
            email, 
            password 
        } = request.body;
        
        // criptografa a senha
        // const saltRounds = 10;
        // const pswHash = bcrypt.hashSync(password, saltRounds);        
        // console.log(pswHash);

        let user = await db('users')
            .where('users.email', '=', email)
            .first();

        if (user != null)
        {
            if (!bcrypt.compareSync(password, user.password))
                return response.json(null);

            // removes property password from object user
            delete user.password;
        }

        return response.json(user);
    }
}