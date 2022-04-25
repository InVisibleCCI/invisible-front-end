import EventCard from "components/EventCard";
import { EventBand } from "pages/Main/EventBand";
import React from "react";
import { FavoritesUserWrapper } from "./style"

interface Props{
    favorites:Event[]; 
}
export const FavoritesUser = ({favorites}:Props) => {



    return <FavoritesUserWrapper>
        <EventBand events={favorites} eventCardSize="small"/>
    </FavoritesUserWrapper>
}