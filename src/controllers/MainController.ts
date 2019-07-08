import { Children, ClassOptions, Controller  } from '@overnightjs/core';;
import {TeacherController} from './Teacher';
import {UserController} from './User';
@Controller('api/v1')
@ClassOptions({mergeParams: true})
@Children([
    new TeacherController(),
    new UserController(),
])
export class MainController {

}
