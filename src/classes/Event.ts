import {Image} from "./Image";
import {Review} from "./Review";
import {AccessibilityCategory} from "./AccessibilityCategory";
import {Address} from "./Address";
import {Category} from "./Category";
import {Merchant} from "./Merchant";

export class Event {
  accessibility_categories: AccessibilityCategory[];
  description: string;
  address: Address;
  categories: Category[];
  difficulty: number;
  name: string;
  objectID: string;
  images: Image[];
  average_mark: number;
  reviews?: Review[];
  card_color : string;
  distance:number;  
  reviews_count: number;
  merchant: Merchant
}