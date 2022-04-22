import axios from "axios";
import { GenericApiService } from "./GenericApiService";

export class UserFavoritesService extends GenericApiService {

    constructor() {
        super('users/favorites/')
    }
    delete(data){
        return axios.delete(this.baseUrl, {data : data}).then(r => r.data)
    }

}