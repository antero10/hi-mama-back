import { Connection } from 'typeorm';
export default class Models {
    connect(): Promise<Connection>;
}
