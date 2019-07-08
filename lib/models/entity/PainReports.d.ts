import { Clinics } from './Clinics';
import { Treatments } from './Treatments';
import { Excersises } from './Excersises';
export declare class PainReports {
    id: number;
    status: string;
    occurrence_time: Date;
    reps_completed_before_pain: Number;
    treatment: Treatments;
    clinic: Clinics;
    excersise: Excersises;
}
