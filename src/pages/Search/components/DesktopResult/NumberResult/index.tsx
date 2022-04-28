import React, { useEffect } from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import {NumberResultWrapper} from "./styles";

/** display the number of result for these search criteria
 *
 * @param searchResults
 * @constructor
 */
export const CustomNumberResult = ({ searchResults }) => {

    const isMobile = window.innerWidth < 768;

    useEffect(() => { }, [searchResults]);

    return (
        <NumberResultWrapper>
            <h3>
                {searchResults &&
                    <span className="number-result-container">
                        {searchResults.nbHits !== 0 && searchResults.query &&
                            <>
                                <b>{searchResults.nbHits}</b>
                                <span className="searchResults"> résultat
                                    {searchResults.nbHits > 1 && 's'}
                                    {!isMobile &&
                                       <> pour "<span style={{ color: '#E95A0C' }}><b>{searchResults.query}</b></span>"</>
                                    }
                                </span>
                            </>
                        }
                    </span>
                }
            </h3>
        </NumberResultWrapper>
    )
}

export const NumberResult = connectStateResults(CustomNumberResult);