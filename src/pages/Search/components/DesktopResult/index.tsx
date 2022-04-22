import React from 'react';
import { useTranslation } from 'react-i18next';
import { connectInfiniteHits, InfiniteHits } from 'react-instantsearch-dom';
import EventCard from '../../../../components/EventCard';
import NoResult from '../NoResult';
import {EventCardWrapper} from "./styles";
import { LeafletMap } from "../../../../components/Leaflet";

const DesktopResults = (props) => {
    const { hits: events, refine } = props;
    const { t } = useTranslation();

    return (
        <EventCardWrapper>
            <div id="results-page">
                <div id="map-container">
                     <LeafletMap events={events} />
                </div>
                <div id="results-container">
                    {events && events.length > 0 ?
                        <InfiniteHits
                            hitComponent={EventCard}
                            translations={{
                                loadMore: t('search.moreResult'),
                            }}
                        />
                        :
                        <NoResult />
                    }
                </div>
            </div>
        </EventCardWrapper>
    );
}
export default connectInfiniteHits(DesktopResults);