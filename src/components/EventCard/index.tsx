import React from "react";
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
import {StarReview} from "../Svg/Star";
import {EventCardWrapper, EventImageWrapper, EventInfosWrapper, EventTextWrapper} from "./styles";
import { colors } from "../../utils/styles";

/** Template to display the search result as cards
 *
 * @param event
 * @constructor
 */
const EventCard: React.FunctionComponent = ({ hit: event }: any) => {

  /** Pick the value of a random key of the object, excluding the first one
   *
   * @param obj
   * @constructor
   */
    function RandomColor(obj)
    {
        const keys = Object.keys(obj);
        return obj[keys[ Math.floor((keys.length -2) * Math.random()) + 2]];
    }

    let color = RandomColor(colors);

    return <EventCardWrapper>
      {console.log(event)}
        <EventImageWrapper url={event.images[0].src} />

        <EventTextWrapper color={color}>
            <LikeButton eventId={event.objectID} />
            <EventInfosWrapper>
                <h3 className={"card-title"}>{event.name}</h3>                
                {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
                <p className={"distance"}>{event.address.city} à XX km</p>
            </EventInfosWrapper>

          <Difficulty difficulty={event.difficulty} />

            <span className={"reviews"}>
                <StarReview />
                4.5
            </span>
        </EventTextWrapper>
    </EventCardWrapper>
}

export default EventCard