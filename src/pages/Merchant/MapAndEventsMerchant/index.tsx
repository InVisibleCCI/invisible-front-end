import { Merchant } from "classes/Merchant";
import EventCard from "components/EventCard";
import { LeafletMap } from "components/Leaflet";
import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from "react";
import { GenericApiService } from "services/GenericApiService";
import { MerchantApiService } from "services/MerchantApiService";
import { MapAndEventsMerchantWrapper } from "./style";
import {Event} from "../../../classes/Event"

interface Props {
    merchant: Merchant;
}
export const MapAndEventsMerchant = ({ merchant }: Props) => {

    const service = new MerchantApiService();
    const [events, setEvents] = useState<Event[]>();

    useEffect(() => {
        GenericApiService.setupAxios$.subscribe(setupOk => {
            if (setupOk) {
                service.getEvents(merchant.id).then(events => setEvents(events))
            }
        })
    }, [])

    const eventTemplate = (event) => {
        return <div className="item"><EventCard eventCardSize="small" hit={event} /> </div>
    }

    return <MapAndEventsMerchantWrapper>
        {events && <React.Fragment>
            <div>
            <h3> Activités proposées : </h3>
            <Carousel value={events} numVisible={2} itemTemplate={eventTemplate}></Carousel>
            </div>
            <div>
                <LeafletMap events={events}/>
            </div>
        </React.Fragment>}
    </MapAndEventsMerchantWrapper>
}