import styled from 'styled-components';
import { colors } from 'utils/styles';

export const ButtonTagWrapper = styled.div`
a{
        border:2px solid #000000; 
        cursor:pointer; 
        border-radius:44px;
        height:50px;
        padding:0 20px;
        text-decoration:none; 
        color:${colors.black};
        display:flex; 
        align-items:center;
        span:first-child{
            margin-right:10px;
        }
    }
}`