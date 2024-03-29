import { Member } from "./Member";

export interface Formation{
    id?:number;
    title:string;
    description:string;
    dateStart:Date;
    dateEnd:Date;
    state?:boolean;
    members?:Member[];
}