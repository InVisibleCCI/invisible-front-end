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
  difficult: number;
  name: string;
  objectID: string;
  images: Image[];
  average_mark: number;
  reviews_count: number;
  reviews?: Review[];
  merchant: Merchant
}