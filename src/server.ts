import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as cors from 'cors';
import * as jwt from 'express-jwt';
import { Server } from '@overnightjs/core'
import logger from './utils/logger';
import Models from './models';
import {MainController} from './controllers/MainController';

export default class App extends Server {
  private port: number = Number(process.env.PORT);
  private model: Models;


  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(jwt({ secret: process.env.JWT_SECRET}).unless({path: ['/api/v1/user/login', '/api/v1/teacher/check-in']}));

    this.model = new Models();
    this.setupControllers();
  }

  private setupControllers(): void {
    const mainController = new MainController();
    super.addControllers([mainController]);
}

  public async start(port: number = this.port): Promise<any> {
    try {
      await this.model.connect();
      await http.createServer(this.app).listen(port);
      logger.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} on port: ${port}}`
      );
    } catch (e) {
      logger.error(e);
    }
  }
}
