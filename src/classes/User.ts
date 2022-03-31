import { Image } from "./Image";

export class User {
   id : number;
   first_name: string; 
   last_name : string; 
   email : string;
   date_joined : Date;
   avatar: Image; 
}