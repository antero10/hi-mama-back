import { Clinics } from './Clinics';
import { Programs } from './Programs';
export declare class ProgramTemplates {
    id: number;
    name: string;
    frequency: Number;
    default_reps_per_set: Number;
    default_hold_time: Number;
    clinic: Clinics;
    program: Programs;
}
