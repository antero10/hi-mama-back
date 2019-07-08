import { Treatments } from './Treatments';
import { Excersises } from './Excersises';
export declare class Programs {
    id: number;
    treatment: Treatments;
    program_group_id: string;
    start_date: Date;
    end_date: Date;
    frequency: Number;
    excersises: Excersises[];
}
