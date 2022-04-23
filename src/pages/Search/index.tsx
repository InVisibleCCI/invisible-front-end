import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from 'utils/types/contexts/SessionContext';
import DesktopResults from "./components/DesktopResult";
import { SearchBarWrapper } from "./styles";
import { SearchIcon } from "../../components/Svg/Search";


// This component display SearchPage it uses AlgoliaComponents
const Search = () => {

    // searchClient defines client with env params
    const searchClient = algoliasearch(`${process.env.REACT_APP_ALGOLIA_APP_ID}`, `${process.env.REACT_APP_ALGOLIA_API_KEY}`);

    const navigate = useNavigate();

    const { lastSearch, setLastSearch } = useSessionContext();
    const { t } = useTranslation();

    // This method use lastSearch (retrieve in SessionContext) to navigate to search page with search string.
    // This method is called on "onChange" from Searchbox (algolia component)

    const launchSearch = (value) => {
        setLastSearch(value)
        if (!value) {
            navigate(`/search?term=${lastSearch}`);
        }
        if (value.replace(/\s/g, '') === "") {
            navigate(`/search`);
        } else {
            navigate(`/search?term=${value}`);
        }
    }
    // InstantSearch and Searchbox are AlgoliaComponents
    return <InstantSearch searchClient={searchClient} indexName="dev">
        <SearchBarWrapper>
            <div>
                <SearchBox
                    className={"algolia-searchBox"}
                    translations={{ placeholder: t('search.input.main') }}
                    searchAsYouType
                    onChange={(e) => {
                      e.preventDefault();
                      launchSearch(e.target.value);
                    }}
                    defaultRefinement={lastSearch && lastSearch}
                    reset={""} />

                <SearchIcon />
            </div>
        </SearchBarWrapper>

        <DesktopResults />
    </InstantSearch>
}

export default Search;