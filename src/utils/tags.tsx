import { Art } from "components/Svg/Art";
import { Boat } from "components/Svg/Boat";
import { Gastronomy } from "components/Svg/Gastronomy";
import { StreetFood } from "components/Svg/StreetFood";
import { WinterSport } from "components/Svg/WinterSport";
import { Yoga } from "components/Svg/Yoga";
import React from "react"; 

export interface ITagsNameIcon{
    name:string; 
    icon: any; 
}
export const tagsNameIcon:ITagsNameIcon[] = [
    {
        name:"Sports d'hiver", 
        icon: <WinterSport/>
    }, 
    {
        name:"Croisières", 
        icon: <Boat/>
    }, 
    {
        name:"Street Food", 
        icon:<StreetFood/>
    }, 
    {
        name:"Gastronomie", 
        icon:<Gastronomy/>
    }, 
    {
        name: "Bien-être", 
        icon:<Yoga/>
    }, 
    {
        name:"Art et Culture", 
        icon:<Art/>
    }

]
  