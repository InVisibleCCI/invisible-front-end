import React from 'react';
import { useTranslation } from 'react-i18next';
import { connectInfiniteHits, InfiniteHits } from 'react-instantsearch-dom';
import EventCard from '../../../../components/EventCard';
import NoResult from '../NoResult'; 

// Display result from Algolia, if no result display NoResult component
// This component use AlgoliaHooks : connectInfiniteHits

const DesktopResults = (props) => {
    const { hits: events } = props;
    const { t } = useTranslation();

    return (
        <div id="results-page">
            <div id="map-container">
                {/* <LeafletMap stores={stores} /> */}
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
    );
}
export default connectInfiniteHits(DesktopResults);