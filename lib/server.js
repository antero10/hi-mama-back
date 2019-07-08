"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const bodyParser = require("body-parser");
const http = require("http");
const expressPinoLogger = require("express-pino-logger");
const logger_1 = require("./utils/logger");
const models_1 = require("./models");
const Clinic_1 = require("./controllers/Clinic");
class GoPhysioBackEnd extends core_1.Server {
    constructor() {
        super();
        this.port = Number(process.env.PORT);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(expressPinoLogger({ logger: logger_1.default }));
        this.model = new models_1.default();
        this.setupControllers();
    }
    setupControllers() {
        const clinicController = new Clinic_1.ClinicController();
        super.addControllers(clinicController);
    }
    start(port = this.port) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.connect();
                yield http.createServer(this.app).listen(port);
                logger_1.default.info(`up and running in ${process.env.NODE_ENV ||
                    'development'} on port: ${port}}`);
            }
            catch (e) {
                logger_1.default.error(e);
            }
        });
    }
}
exports.default = GoPhysioBackEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0IseURBQXlEO0FBQ3pELDJDQUFvQztBQUNwQyxxQ0FBOEI7QUFDOUIsaURBQXNEO0FBRXRELE1BQXFCLGVBQWdCLFNBQVEsYUFBTTtJQUtqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTEYsU0FBSSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTTlDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSx5QkFBZ0IsRUFBRSxDQUFDO1FBQ2hELEtBQUssQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRWMsS0FBSyxDQUFDLE9BQWUsSUFBSSxDQUFDLElBQUk7O1lBQ3pDLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMzQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsZ0JBQU0sQ0FBQyxJQUFJLENBQ1QscUJBQXFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtvQkFDdkMsYUFBYSxhQUFhLElBQUksR0FBRyxDQUNwQyxDQUFDO2FBQ0g7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUM7S0FBQTtDQUNGO0FBL0JELGtDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciB9IGZyb20gJ0BvdmVybmlnaHRqcy9jb3JlJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgZXhwcmVzc1Bpbm9Mb2dnZXIgZnJvbSAnZXhwcmVzcy1waW5vLWxvZ2dlcic7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCBNb2RlbHMgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHtDbGluaWNDb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXJzL0NsaW5pYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvUGh5c2lvQmFja0VuZCBleHRlbmRzIFNlcnZlciB7XG4gIHByaXZhdGUgcG9ydDogbnVtYmVyID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQpO1xuICBwcml2YXRlIG1vZGVsOiBNb2RlbHM7XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoZXhwcmVzc1Bpbm9Mb2dnZXIoeyBsb2dnZXI6IGxvZ2dlciB9KSk7XG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbHMoKTsgICAgXG4gICAgdGhpcy5zZXR1cENvbnRyb2xsZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwQ29udHJvbGxlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2xpbmljQ29udHJvbGxlciA9IG5ldyBDbGluaWNDb250cm9sbGVyKCk7XG4gICAgc3VwZXIuYWRkQ29udHJvbGxlcnMoY2xpbmljQ29udHJvbGxlcik7XG59XG5cbiAgcHVibGljIGFzeW5jIHN0YXJ0KHBvcnQ6IG51bWJlciA9IHRoaXMucG9ydCk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMubW9kZWwuY29ubmVjdCgpO1xuICAgICAgYXdhaXQgaHR0cC5jcmVhdGVTZXJ2ZXIodGhpcy5hcHApLmxpc3Rlbihwb3J0KTtcbiAgICAgIGxvZ2dlci5pbmZvKFxuICAgICAgICBgdXAgYW5kIHJ1bm5pbmcgaW4gJHtwcm9jZXNzLmVudi5OT0RFX0VOViB8fFxuICAgICAgICAgICdkZXZlbG9wbWVudCd9IG9uIHBvcnQ6ICR7cG9ydH19YFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSk7XG4gICAgfVxuICB9XG59XG4iXX0=