import React from "react";
import { StarReview } from "../Svg/Star";
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
import {EventCardWrapper, EventImageWrapper, EventInfosWrapper, EventTextWrapper} from "./styles";
import { cardColor, colors } from "../../utils/styles";
import { MapService } from "../Leaflet/MapService";
import { useNavigate } from "react-router-dom";

interface Props {
    hit: any;
    eventCardSize: "small" | "large";
}
/** Template to display the search result as cards
 *
 * @param event
 * @constructor
 */
const EventCard: React.FunctionComponent<Props> = ({ hit:event, eventCardSize="small" }) => {
  const navigate = useNavigate();

    /** Pick the value of a random key of the object, excluding the first one
     *
     * @param obj
     * @constructor
     */
    const randomColor = (obj) => {
        const keys = Object.keys(obj);
        return obj[keys[Math.floor((keys.length - 2) * Math.random()) + 2]];
    }

    let color = randomColor(cardColor);

    return (
      <div onMouseEnter={() => MapService.currentEventHoverSubject$.next(event.objectID)} onClick={() => navigate(`/activity/${event.objectID}`)}>
        <EventCardWrapper aria-label={"Nouvelle activitée"} cardSize={eventCardSize}>
           <EventImageWrapper cardSize={eventCardSize} url={event.images[0].src} alt={event.images[0].alt_text}/>

            <EventTextWrapper color={color} cardSize={eventCardSize}>
                <EventInfosWrapper>
                    <h4 className={"card-title"}>{event.name}</h4>
                    {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
                    <p className={"distance"}>{event.address.city} à XX km</p>
                </EventInfosWrapper>

                <LikeButton eventId={event.objectID} />

                <Difficulty difficulty={event.difficulty} />

                {event.avergae_mark !== 0 &&
                    <div className={"reviews"}>
                        <StarReview />
                      {event.average_mark}
                    </div>
                }

            </EventTextWrapper>
      </EventCardWrapper>
    </div>
    );
}

export default EventCard