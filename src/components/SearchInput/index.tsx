import React, { Props } from 'react';
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "types/contexts/SessionContext";

const SearchInput: React.FunctionComponent = () => {
    const navigate = useNavigate();

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
            placeholder="Avec InVisible trouvez une activité près de chez vous !"
        />
        <button onClick={search} id="button-search">Rechercher </button>
    </div>;
}

export default SearchInput