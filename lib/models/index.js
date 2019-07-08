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
const typeorm_1 = require("typeorm");
class Models {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield typeorm_1.createConnection({
                    type: 'mysql',
                    host: process.env.DATABASE_URL,
                    port: 3306,
                    username: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE_NAME,
                    entities: [`${__dirname}/entity/*.js`],
                });
                yield connection.synchronize();
                return connection;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.default = Models;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUQ7QUFFdkQsTUFBcUIsTUFBTTtJQUNuQixPQUFPOztZQUNYLElBQUk7Z0JBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSwwQkFBZ0IsQ0FBQztvQkFDeEMsSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtvQkFDOUIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtvQkFDbkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCO29CQUN2QyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO29CQUNuQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFNBQVMsY0FBYyxDQUFDO2lCQUN2QyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRS9CLE9BQU8sVUFBVSxDQUFDO2FBQ25CO1lBQ0QsT0FBTSxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUM7S0FBQTtDQUNGO0FBcEJELHlCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tICd0eXBlb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWxzIHtcbiAgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPENvbm5lY3Rpb24+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICB0eXBlOiAnbXlzcWwnLFxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgICAgIHBvcnQ6IDMzMDYsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSLFxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfUEFTU1dPUkQsXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxuICAgICAgICBlbnRpdGllczogW2Ake19fZGlybmFtZX0vZW50aXR5LyouanNgXSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgY29ubmVjdGlvbi5zeW5jaHJvbml6ZSgpO1xuICBcbiAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBjYXRjaChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuIl19