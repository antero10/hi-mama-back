import {MigrationInterface, QueryRunner, getManager} from "typeorm";
import {Users} from '../models/entity/Users';
export class Users1562549742638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const userRepository = getManager().getRepository(Users);

      const user = userRepository.create({
        email: 'test@himama.com',
        password: '1234'
      });

      await userRepository.save(user);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
