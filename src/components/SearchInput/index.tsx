import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "utils/types/contexts/SessionContext";

const SearchInput: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { lastSearch, setLastSearch } = useSessionContext();

    const search = () => {
        let searchString = "/search";
        if (lastSearch) {
            searchString += `?term=${lastSearch}`;
        }

        navigate(searchString);
    }

    const handleKeyPress = (event) => {
        if (event.which === 13) {
            search();
        }
    }

    return <div>
        <input
            onKeyPress={handleKeyPress}
            onChange={(e) => setLastSearch(e.target.value)}
            placeholder={t('search.input.main')}
        />
        <button onClick={search} id="button-search">Rechercher </button>
    </div>;
}

export default SearchInput