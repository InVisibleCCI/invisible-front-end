import React from 'react';
import { useTranslation } from 'react-i18next';
import { connectInfiniteHits, InfiniteHits } from 'react-instantsearch-dom';
import NoResult from '../NoResult';
import {DesktopResultWrapper, ResultWrapper, MapDivider, MapWrapper, EventResultWrapper} from "./styles";
import { LeafletMap } from "../../../../components/Leaflet";
import { NumberResult } from "./NumberResult";
import EventCard from '../../../../components/EventCard';

// Display result from Algolia, if no result display NoResult component
// This component use AlgoliaHooks : connectInfiniteHits

const DesktopResults = (props) => {
    const { hits: events } = props;
    const { t } = useTranslation();

    return (
        <DesktopResultWrapper>
            <ResultWrapper id="results-page">
                <MapWrapper>
                    <MapDivider />
                    <LeafletMap events={events} />
                </MapWrapper>
                <EventResultWrapper id="results-container">
                    <NumberResult searchResults={events}/>
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
                </EventResultWrapper>
            </ResultWrapper>
        </DesktopResultWrapper>
    );
}
export default connectInfiniteHits(DesktopResults);