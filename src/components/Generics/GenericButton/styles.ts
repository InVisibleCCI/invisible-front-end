import styled from 'styled-components';
import { colors } from 'utils/styles';

interface GenericButtonWrapperProps{
    color?:string;
    backgroundColor?:string; 
    backgroundColorHover?:string; 
    borderColor?:string; 
    borderColorHover?:string
}

export const GenericButtonWrapper = styled.div<GenericButtonWrapperProps>`
    .p-button{
        border-radius: 46px;
        background-color:${props => props.backgroundColor ? props.backgroundColor : colors.pink};
        font-family: "Montserrat Alternates"; 
        font-size:22px;
        height:40px;
        border-color: ${props => props.borderColor ? props.borderColor : colors.pink};
        display:flex; 
        justify-content:center;
        color:${props => props.color ? props.color : "white"}
    }
    .p-button:hover{
        background-color:${props => props.backgroundColorHover ? props.backgroundColorHover : colors.pinkHover};
        border-color: ${props => props.borderColorHover ? props.borderColorHover : colors.pinkHover};
        color: ${props => props.color ? props.color : "white" }
    }

`