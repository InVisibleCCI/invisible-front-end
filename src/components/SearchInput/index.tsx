import { InputText } from 'primereact/inputtext';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "utils/types/contexts/SessionContext";
import { SearchInputWrapper } from './style';

// Component who display static SearchBar (not Algolia) and lauch search

const SearchInput: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { lastSearch, setLastSearch } = useSessionContext();

    // This method use lastSearch (retrieve in SessionContext) to navigate to search page
    // With search string

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

    return <SearchInputWrapper>
        <div id="search-input">
            <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                    value={lastSearch}
                    onChange={(e) => setLastSearch(e.target.value)}
                    placeholder={t('search.input.main')}
                    onKeyDown={handleKeyPress}
                />
            </span>
        </div>
    </SearchInputWrapper>
}

export default SearchInput