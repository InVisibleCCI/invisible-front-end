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
        return obj[keys[ Math.floor((keys.length -1) * Math.random()) + 1]];
    }

    let color = RandomColor(colors);

    return <EventCardWrapper>
        <EventImageWrapper url={event.images[0].src} />

        <EventTextWrapper color={color}>
            {/* TODO add isLiked={event.isFavorite} when ok in DB*/}
            <LikeButton isLiked={false} />

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