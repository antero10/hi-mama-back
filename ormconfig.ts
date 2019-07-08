import { ConnectionOptions } from 'typeorm';
import { teachers1562531796355 } from './src/migrations/1562531796355-teachers';
import {Users1562549742638} from './src/migrations/1562549742638-Users';
import {Teachers} from './src/models/entity/Teachers';
import {Sessions} from './src/models/entity/Sessions';
import {SessionsItems} from './src/models/entity/SessionsItems';
import {Users} from './src/models/entity/Users';

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DATABASE_URL,
  port: 3306,
  // logging: process.env.NODE_ENV != 'production',
  logging: false,
  synchronize: true,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    Teachers, Sessions, SessionsItems, Users // if I dont explicit use the models name typeorm migration doesn't recognize the models
  ],
  // migrations: [
  //   __dirname + 'src/migrations/*{.ts,.js}'
  // ],
  migrations: [
    teachers1562531796355, Users1562549742638 // For some reason the migrations are not getting if i put the folder location
  ],
  cli: {
    migrationsDir: '/src/migrations',
  }
};

export = config;
