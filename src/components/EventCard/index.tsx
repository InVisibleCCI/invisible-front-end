import React from "react";
import { useNavigate } from "react-router-dom";
import { MapService } from "../Leaflet/MapService";
import { StarReview } from "../Svg/Star";
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
import { EventCardWrapper, EventImageWrapper, EventInfosWrapper, EventTextWrapper } from "./styles";
import ReadMoreReact from 'read-more-react';

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
    <div onMouseEnter={() => MapService.currentEventHoverSubject$.next(event.objectID)}>
      <EventCardWrapper aria-label={"Nouvelle activitée"} cardSize={eventCardSize}>
        <EventImageWrapper onClick={() => navigate(`/activity/${event.objectID}`)} cardSize={eventCardSize} url={event.images[0].src} alt={event.images[0].alt_text} />
        <EventTextWrapper color={event.card_color} cardSize={eventCardSize}>
          <EventInfosWrapper>
            <a href={`/activity/${event.objectID}`}><h4 className={"card-title"}>{event.name}</h4> </a>            
            {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
            <p className={"distance"}>{event.address.city} à XX km</p>
          </EventInfosWrapper>
          {eventCardSize == 'small' ?
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

            : 
            <div className="description">
              <ReadMoreReact text={event.description} readMoreText={"Lire plus"} min={80}
                ideal={100}
                max={120} />
            </div>           
            
            }

          <LikeButton eventId={event.objectID} />




        </EventTextWrapper>
      </EventCardWrapper>
    </div>
  );
}

export default EventCard