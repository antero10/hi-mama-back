import { Programs } from './Programs';
import { PainReports } from './PainReports';
export declare class Treatments {
    id: number;
    start_date: Date;
    end_date: Date;
    sessions_completed: Number;
    program_ended_message_to_patient: String;
    enable_pain_assessment: Boolean;
    enable_pain_reports: Boolean;
    force_device_offline: Boolean;
    programs: Programs[];
    painReports: PainReports[];
}
