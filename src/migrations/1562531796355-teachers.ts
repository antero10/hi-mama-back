import {MigrationInterface, QueryRunner, getManager} from "typeorm";
import {Teachers} from '../models/entity/Teachers';

import {Chance} from 'chance';

export class teachers1562531796355 implements MigrationInterface {
    private chance: any = new Chance()

    public constructor() {
      const _this = this;
      this.chance.mixin({
        'teacher': function() {
        return {
          first_name: _this.chance.first(),
          last_name: _this.chance.last(),
          pin_code: _this.chance.ssn({ ssnFour: true }),
        };
      }
      });

    }
    public async up(queryRunner: QueryRunner): Promise<any> {
      const teachersRepository = getManager().getRepository(Teachers);
      const promises = []
      for(let i: number = 0; i <=10 ; i++) {
        const teacher = teachersRepository.create(this.chance.teacher());
        promises.push(teachersRepository.save(teacher));
      }
      await Promise.all(promises);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
