import { Button } from "primereact/button";
import React from 'react';
import { GenericButtonWrapper } from "./styles";

interface Props {
    type?: 'submit' | 'reset' | 'button' | undefined;
    label: string
}


export const GenericButton: React.FunctionComponent<Props> = ({ type, label }) => {

    return <GenericButtonWrapper>
        <Button type={type}> {label} </Button>
    </GenericButtonWrapper>
}