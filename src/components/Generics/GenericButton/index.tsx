import { Button } from "primereact/button";
import React from 'react';
import { GenericButtonWrapper } from "./styles";

interface Props {
    type?: 'submit' | 'reset' | 'button' | undefined;
    label: string, 
    color?:string;
    backgroundColor?:string; 
    backgroundColorHover?:string; 
    borderColor?:string; 
    borderColorHover?:string
    className?:string; 
    onClick?:any
}


export const GenericButton: React.FunctionComponent<Props> = ({ type, label, color, borderColor, backgroundColor, borderColorHover, backgroundColorHover, className, onClick }) => {

    return <GenericButtonWrapper
    borderColor={borderColor}
    borderColorHover={borderColorHover}
    backgroundColor={backgroundColor}
    backgroundColorHover={backgroundColorHover}
    color={color}
    
    >
        <Button className={className} type={type} onClick={onClick}> {label} </Button>
    </GenericButtonWrapper>
}