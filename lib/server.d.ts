import { Server } from '@overnightjs/core';
export default class GoPhysioBackEnd extends Server {
    private port;
    private model;
    constructor();
    private setupControllers;
    start(port?: number): Promise<any>;
}
