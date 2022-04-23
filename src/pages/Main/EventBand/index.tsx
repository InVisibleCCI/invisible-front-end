import { Event } from "classes/Event"
import EventCard from "components/EventCard";
import React from "react"
import { EventBandWrapper } from "./style"

interface Props{
    events: any;
    title: string;
    eventCardSize?: "small" | "large" 
}

export const EventBand = ({events, title, eventCardSize="small"}:Props) => {
    return <EventBandWrapper>
        <h3> {title}</h3>
        <div className="events-band-container">
            {events && events.map(event => <EventCard eventCardSize={eventCardSize} key={event.objectID} hit={event}/>)}

        </div>
    </EventBandWrapper>
}