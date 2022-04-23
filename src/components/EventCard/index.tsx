import React from "react";
import { colors } from "../../utils/styles";
import { StarReview } from "../Svg/Star";
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
import { EventCardWrapper, EventImageWrapper, EventInfosWrapper, EventTextWrapper } from "./styles";

interface Props {
    hit: any;
    eventCardSize: "small" | "large";
}
/** Template to display the search result as cards
 *
 * @param event
 * @constructor
 */
const EventCard: React.FunctionComponent<Props> = ({ hit, eventCardSize }) => {

    /** Pick the value of a random key of the object, excluding the first one
     *
     * @param obj
     * @constructor
     */
    const randomColor = (obj) => {
        const keys = Object.keys(obj);
        return obj[keys[Math.floor((keys.length - 2) * Math.random()) + 2]];
    }

    let color = randomColor(colors);

    return <EventCardWrapper cardSize={eventCardSize}>
        <span role="img" aria-label={hit.images[0].alt}>
            <EventImageWrapper cardSize={eventCardSize} url={hit.images[0].src} />
        </span>

        <EventTextWrapper cardSize={eventCardSize} color={color}>
            <LikeButton eventId={hit.objectID} />
            <EventInfosWrapper>
                <h3 className={"card-title"}>{hit.name}</h3>
                {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
                <p className={"distance"}>{hit.address.city} à XX km</p>
            </EventInfosWrapper>

            {eventCardSize == "small" ? <React.Fragment>
                <Difficulty difficulty={hit.difficulty} />

                <span className={"reviews"}>
                    <StarReview />
                    4.5
                </span>
            </React.Fragment> :
                <p className="description">{hit.description}</p>
            }
        </EventTextWrapper>
    </EventCardWrapper>
}

export default EventCard