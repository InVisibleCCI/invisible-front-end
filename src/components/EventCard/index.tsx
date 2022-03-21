import { Props } from "react"
import React from "react"

const EventCard: React.FunctionComponent = ({ hit: event }: any) => {
    return <div>
        <span> {event.name} </span>
        <img src={event.images[0].src}></img>
    </div>
}

export default EventCard