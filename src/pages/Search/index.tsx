import algoliasearch from 'algoliasearch/lite';
import { debounce } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from 'utils/types/contexts/SessionContext';
import DesktopResults from "./components/DesktopResult";

interface Props {
}

const Search: React.FunctionComponent<Props> = () => {

  const searchClient = algoliasearch(`${process.env.REACT_APP_ALGOLIA_APP_ID}`, `${process.env.REACT_APP_ALGOLIA_API_KEY}`);

  const navigate = useNavigate();

  const { lastSearch, setLastSearch } = useSessionContext();
  const { t } = useTranslation();

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

  const onChangeSearchBox = (value) => {
    // HtmlService.scrollToTop();
    // sessionContext.setLastSearch(value);
  }

  const debounceOnChangeSearchBox = React.useCallback(debounce(onChangeSearchBox, 400), []);

  return <InstantSearch searchClient={searchClient} indexName="dev">
    <SearchBox
      translations={{ placeholder: t('search.input.main') }}
      searchAsYouType
      onChange={(e) => {
        e.preventDefault();
        launchSearch(e.target.value);
        debounceOnChangeSearchBox(e.target.value);
      }}
      defaultRefinement={lastSearch && lastSearch}
    />
    <DesktopResults />

  </InstantSearch>
}

export default Search;