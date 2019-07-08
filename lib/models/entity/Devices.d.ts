import { Clinics } from './Clinics';
export declare class Devices {
    id: number;
    clinic: Clinics;
    name: string;
    status: string;
    enable_pain_reports: boolean;
    enable_pain_assesment: boolean;
    force_device_offline: boolean;
    last_sync_time: Date;
}
