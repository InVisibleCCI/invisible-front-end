import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connectInfiniteHits, InfiniteHits, Configure } from 'react-instantsearch-dom';
import EventCard from '../../../../components/EventCard';
import { LeafletMap } from "../../../../components/Leaflet";
import NoResult from '../NoResult';
import { NumberResult } from "./NumberResult";
import { DesktopResultWrapper, EventResultWrapper, MapDivider, MapWrapper, ResultWrapper } from "./styles";

// Display result from Algolia, if no result display NoResult component
// This component use AlgoliaHooks : connectInfiniteHits

const DesktopResults = (props) => {
    const { hits: events } = props;
    const { t } = useTranslation();

    useEffect(() => {
        let buttonLoadMore: HTMLElement = document.getElementsByClassName('ais-InfiniteHits-loadMore')[0] as HTMLElement;
        let containerHits: HTMLElement = document.getElementsByClassName("ais-InfiniteHits-list")[0] as HTMLElement;
        window.onscroll = () => {
            if (containerHits) {
                if ((window.innerHeight + window.scrollY) >= containerHits.offsetHeight+200) {
                    buttonLoadMore.click();
                }
            }
        }
    }, [events])

    return (
        <DesktopResultWrapper>
            <ResultWrapper>
                <EventResultWrapper>
                    <NumberResult searchResults={events} />
                    <Configure
                        hitsPerPage={4}
                    />
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
                </EventResultWrapper>
                <MapWrapper>
                    <MapDivider />
                    <LeafletMap events={events} />
                </MapWrapper>
            </ResultWrapper>
        </DesktopResultWrapper>
    );
}
export default connectInfiniteHits(DesktopResults);