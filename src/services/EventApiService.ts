import axios from "axios";
import { IGeolocation } from "utils/types/contexts/SessionContext";
import { GenericApiService } from "./GenericApiService";

export interface IHomePageEvent{
    near_location:Event[], 
    user_favorites:Event[], 
    exclusives:Event[], 
    most_visited:Event[]

}
export class EventApiService extends GenericApiService {

    constructor() {
        super('events')
    }
    getEventForHomePage(geolocation:IGeolocation|null=null):Promise<IHomePageEvent>{
        let url = `${this.baseUrl}/?page=homepage`
        if(geolocation){
            url+= `&latitude=${geolocation.latitude}&longitude=${geolocation.longitude}`
        }
        return axios.get(url).then(r=>r.data)
    }

}