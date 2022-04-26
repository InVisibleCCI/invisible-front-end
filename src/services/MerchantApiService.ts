import axios from "axios"
import { GenericApiService } from "./GenericApiService"
import {Event} from "../classes/Event"

export class MerchantApiService extends GenericApiService {

    constructor() {
        super('merchants')
    }

    getEvents(id:string):Promise<Event[]>{
        return axios.get(`${this.baseUrl}/${id}/events/`).then(r=>r.data)
    }

}