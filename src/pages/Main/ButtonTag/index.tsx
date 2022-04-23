import React from "react"
import { ITagsNameIcon } from "utils/tags"
import { ButtonTagWrapper } from "./style"



export const ButtonTag = ({name,icon}:ITagsNameIcon) => {
    return <ButtonTagWrapper>
            <span> {name} </span>
            <span> {icon} </span>
    </ButtonTagWrapper>
}