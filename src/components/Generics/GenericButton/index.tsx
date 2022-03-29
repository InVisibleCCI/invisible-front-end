import { Button } from "primereact/button"
import React from 'react'; 

interface Props {
    type?: 'submit' | 'reset' | 'button' | undefined;
    label : string   
}


export const GenericButton: React.FunctionComponent<Props> = ({type, label}) => {

    return <Button type={type}> {label} </Button>
}