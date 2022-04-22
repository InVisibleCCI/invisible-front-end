import styled from 'styled-components';
import { colors } from 'utils/styles';

export const GenericButtonWrapper = styled.div`
    .p-button{
        border-radius: 46px;
        background-color:${colors.pink};
        font-family: "Montserrat Alternates"; 
        font-size:22px;
        height:40px;
        border-color: ${colors.pink};
        display:flex; 
        justify-content:center;
    }
    .p-button:hover{
        background-color:${colors.pinkHover};
        border-color: ${colors.pinkHover}
    }

`