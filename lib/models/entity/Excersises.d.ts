import { Programs } from './Programs';
import { PainReports } from './PainReports';
export declare class Excersises {
    id: number;
    name: String;
    description: String;
    key: String;
    tags: String;
    related_cdn_links_image: String;
    related_cdn_links_video: String;
    related_cdn_links_icon: String;
    program: Programs;
    painReports: PainReports[];
}
