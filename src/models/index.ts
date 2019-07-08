import { createConnection, Connection } from 'typeorm';
import * as config from '../../ormconfig';

export default class Models {
  async connect(): Promise<Connection> {
    try {
      const connection = await createConnection(config);
      return connection;
    }
    catch(err) {
      throw new Error(err);
    }
  }
}
