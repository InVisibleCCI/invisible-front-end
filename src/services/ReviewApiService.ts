import {GenericApiService} from "./GenericApiService";


export class ReviewApiService extends GenericApiService {
  constructor() {
    super('reviews/')
  }
}