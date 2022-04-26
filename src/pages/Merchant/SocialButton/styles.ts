import styled from 'styled-components';
import { colors } from 'utils/styles';

interface SocialButtonWrapperProps{
    active:boolean
}
export const SocialButtonWrapper = styled.div<SocialButtonWrapperProps>`
border-radius:50%; 
height:32px; 
width:32px; 
background-color: ${props => props.active ? colors.pink : colors.middleGrey};
display:flex; 
justify-content:center; 
align-items:center;
margin-right:10px;

a{
    text-decoration:none; 
    color:${colors.textColorWhite}; 
    .pi{
        font-size: 18px;
        margin-top:2px;
    }

}

`

