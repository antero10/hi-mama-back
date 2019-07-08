import { Devices } from './Devices';
import { ProgramTemplates } from './PorgramTemplates';
import { PatientStubs } from './PatientStubs';
export declare class Clinics {
    id: number;
    name: String;
    subdomain: String;
    address: String;
    city: String;
    state_province: String;
    postal_code: String;
    phone_number: String;
    fax_number: String;
    country: String;
    clinic_user_tv_api_key: String;
    foto_api_key: String;
    enable_pain_reports: Boolean;
    rep_hold_success_threshold: Number;
    has_insurance: Boolean;
    has_policy_holder: Boolean;
    has_primary_care: Boolean;
    devices: Devices[];
    treatments: Devices[];
    programTemplates: ProgramTemplates[];
    painReports: ProgramTemplates[];
    patientStubs: PatientStubs[];
}
