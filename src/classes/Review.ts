import {Image} from "./Image";

export class Review {
  title: string;
  description: string;
  mark: number;
  user: {
    public_name: string,
    avatar: Image,
  }
}