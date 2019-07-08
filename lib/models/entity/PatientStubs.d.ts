import { Clinics } from './Clinics';
import { Devices } from './Devices';
export declare class PatientStubs {
    id: number;
    clinic: Clinics;
    active_program_start_date: Date;
    active_program_end_date: Date;
    active_program_frequency: Number;
    status: string;
    device_assigned: Devices;
}
