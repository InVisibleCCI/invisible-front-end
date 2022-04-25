import styled from 'styled-components';
import { colors } from 'utils/styles';

export const ProfilWrapper = styled.main`
.user-management-container {
    display:flex;
    justify-content:center;
    max-width:400px; 
    min-width:400px;
    margin:auto;
    margin-top:50px;
    margin-bottom:40px;
    border-bottom: 1px solid lightgray;
     
    a{
        text-decoration: none; 
        color: ${colors.textColor}
    }
    div{
        font-size : 20px; 
        font-family: "Montserrat Alternates";
        padding:20px;
        border-top: 1px solid lightgray;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        border-top-left-radius:20px; 
        border-top-right-radius:20px;
        margin-bottom:-1px;
    } 
    .active{
        border-color:#000000;
        border-bottom:1px solid black;
    }

`;