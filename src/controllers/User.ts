import * as jwt from 'jsonwebtoken';
import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import Logger from '../utils/logger';
import {UserInterface} from '../interfaces';
import {Users} from '../models/entity/Users';
@Controller('user')
export class UserController {

    @Post('login')
    private async login(req: Request, res: Response): Promise<any> {
      const body = req.body as UserInterface;
      try {
        Logger.info("About to login...");
        const userRepository = getManager().getRepository(Users);
        const user = await userRepository.findOne({
          where: {
            email: body.email,
            password: body.password
          }
        });
        if (user) {
          Logger.info("Sending token to user");
          const token = jwt.sign({email: user.email},
             process.env.JWT_SECRET,
             {
               expiresIn: '24h' // expires in 24 hours
             }
          );
          return res.status(200).send({
            ...user,
            token: token
          });
        }
        Logger.info("User not found");
        return res.status(404).send();
      } catch (e)  {
        Logger.error(e);
        return res.status(500).send(e);
      }
    }
}
