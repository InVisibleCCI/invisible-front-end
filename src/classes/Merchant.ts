import { Address } from "./Address";
import { Image } from "./Image";
import { RegularOpening } from "./RegularOpening";

export class Merchant {
  name: string;
  logo: Image;
  phone_number: string;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  email: string;
  address: Address;
  regular_openings : RegularOpening[]; 
  description?: string;
}