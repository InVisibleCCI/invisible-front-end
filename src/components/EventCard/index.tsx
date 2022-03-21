import { Props } from "react"
import React from "react"

const EventCard: React.FunctionComponent = ({ hit: event }: any) => {
    return <section>
        <span> {event.name} </span>
        <img src={event.images[0].src}></img>
    </section>
}

export default EventCard