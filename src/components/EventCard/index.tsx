import React from "react";
import { useNavigate } from "react-router-dom";
import { MapService } from "../Leaflet/MapService";
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
const EventCard: React.FunctionComponent<Props> = ({ hit: event, eventCardSize = "small" }) => {
  const navigate = useNavigate();

  /** Pick the value of a random key of the object, excluding the first one
   *
   * @param obj
   * @constructor
   */


  return (
    <div onMouseEnter={() => MapService.currentEventHoverSubject$.next(event.objectID)} onClick={() => navigate(`/activity/${event.objectID}`)}>
      <EventCardWrapper aria-label={"Nouvelle activitée"} cardSize={eventCardSize}>
        <EventImageWrapper cardSize={eventCardSize} url={event.images[0].src} alt={event.images[0].alt_text} />
        <EventTextWrapper color={event.card_color} cardSize={eventCardSize}>
          <EventInfosWrapper>
            <h4 className={"card-title"}>{event.name}</h4>
            {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
            <p className={"distance"}>{event.address.city} à XX km</p>
          </EventInfosWrapper>

          <LikeButton eventId={event.objectID} />
          <div className="icons-infos-event">

            {event.avergae_mark !== 0 &&
              <div className={"reviews"}>
                <StarReview />
                {event.average_mark}
              </div>
            }
            <div>
              <Difficulty difficulty={event.difficulty} />
            </div>
          </div>



        </EventTextWrapper>
      </EventCardWrapper>
    </div>
  );
}

export default EventCard