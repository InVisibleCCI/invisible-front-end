import {Image} from "./Image";
import {AccessibilityCategory} from "./AccessibilityCategory";
import {Address} from "./Address";
import {Category} from "./Category";

export class Event {
  accessibility_categories: AccessibilityCategory[];
  address: Address;
  categories: Category[];
  difficult: number;
  name: string;
  objectID: string;
  images: Image[];
  card_color : string;
  distance:number;  
}