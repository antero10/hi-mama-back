import * as moment from 'moment';
import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import Logger from '../utils/logger';
import {Sessions} from '../models/entity/Sessions'
import {Teachers} from '../models/entity/Teachers';
import {SessionsItems} from '../models/entity/SessionsItems';
import {CheckInInterface} from '../interfaces';

@Controller('teacher')
export class TeacherController {

    @Post('check-in')
    private async checkIn(req: Request, res: Response) {

      const teachersRepository = getManager().getRepository(Teachers);
      const sessionsRepository = getManager().getRepository(Sessions);
      const sessionsItemsRepository = getManager().getRepository(SessionsItems);
      const requestBody = req.body as CheckInInterface
      try {
        const teacher = await teachersRepository.findOne({
          where: {
              pin_code: requestBody.pin_code
          },
          relations: ['sessions'],
        });

        let oldSession = teacher.sessions.filter((item: Sessions) => {
          if (moment(item.start_date) === moment().hour(1).minute(0).seconds(0) &&
              moment(item.end_date) === moment().hour(1).minute(0).seconds(0).add(1, 'days'))
              console.log('asd');
              return item;
        })[0];
        if (!oldSession) {
          Logger.info('Session not created... Creating one');
          let session = sessionsRepository.create({
            start_date: moment().hour(1).minute(0).seconds(0).format('YYYY-MM-DD'),
            end_date: moment().hour(1).minute(0).seconds(0).add(1, 'days').format('YYYY-MM-DD'),
          });
          await sessionsRepository.save(session);
          session = await sessionsRepository.findOne({
            where: {
              id: session.id
            },
            relations: ['items']
          });
          const sessionItem = sessionsItemsRepository.create({
            check_time: moment().toDate(),
            status: 'check-in'
          });

          await sessionsItemsRepository.save(sessionItem);

          session.items.push(sessionItem);
          teacher.sessions.push(session);
          await sessionsRepository.save(session);
          await teachersRepository.save(teacher);
        } else {
          Logger.info('Session created... Creating one item');
          oldSession = await sessionsRepository.findOne({
            where: {
              id: oldSession.id
            },
            relations: ['items']
          });
          const sessionItem = sessionsItemsRepository.create({
            check_time: moment().toDate(),
            status: oldSession.items[oldSession.items.length > 0 ? oldSession.items.length - 1 : 0 ].status == 'check-in' ? 'check-out' : 'check-in',
          });

          await sessionsItemsRepository.save(sessionItem);
          oldSession.items.push(sessionItem);
          await sessionsRepository.save(oldSession);
        }
        return res.status(200).send();
      } catch (e) {
        return res.status(500).send(e);
      }



    }

    private async getTeacherWithPinCode(pin_code: number) {

    }
}
