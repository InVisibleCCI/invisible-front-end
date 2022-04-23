import { GenericApiService } from "./GenericApiService";

export class NavigationTrackerApiService extends GenericApiService {
    constructor() {
        super('navigation-trackers/')
    }
}