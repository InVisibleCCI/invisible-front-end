import React, { Props } from 'react';
import { connectInfiniteHits, InfiniteHits } from 'react-instantsearch-dom';
import NoResult from '../NoResult';
import EventCard from '../../../../components/EventCard'

const DesktopResults = (props) => {
    const { hits: events, refine } = props;

    return (
        <React.Fragment>
            <div id="results-page">
                <div id="map-container">
                    {/* <LeafletMap stores={stores} /> */}
                </div>
                <div id="results-container">
                    {events && events.length > 0 ?
                        <InfiniteHits
                            hitComponent={EventCard}
                            translations={{
                                loadMore: 'Plus de résultats',
                            }}
                        />
                        :
                        <NoResult />
                    }
                </div>
            </div>
        </React.Fragment >
    );
}
export default connectInfiniteHits(DesktopResults);