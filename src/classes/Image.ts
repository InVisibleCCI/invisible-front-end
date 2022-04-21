import { ImageTypeEnum } from "./enums/ImageTypeEnum";

export class Image{
    type: ImageTypeEnum;  
    alt_text:string; 
    src:string; 
    order:number;  
}