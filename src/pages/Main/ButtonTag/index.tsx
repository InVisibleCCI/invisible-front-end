import React from "react"
import { useNavigate } from "react-router-dom";
import { ITagsNameIcon } from "utils/tags"
import { useSessionContext } from "utils/types/contexts/SessionContext";
import { ButtonTagWrapper } from "./style"



export const ButtonTag = ({name,icon}:ITagsNameIcon) => {
    const { setLastSearch } = useSessionContext();
    const navigate = useNavigate();

    const search = (event, name) => {
        event.preventDefault();
        setLastSearch(name)
        let searchString = "/search";
            searchString += `?term=${name}`;
        navigate(searchString);
    }
    
    return <ButtonTagWrapper>
        <a onClick={(event) => search(event,name)}  href={`search?term=${name}`}>
            <span> {name} </span>
            <span> {icon} </span>
        </a>
    </ButtonTagWrapper>
}