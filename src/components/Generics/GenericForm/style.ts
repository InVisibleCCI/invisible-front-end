import styled from 'styled-components';
import { colors } from 'utils/styles';

export const GenericFormWrapper = styled.div`
input{
    height:36px;
    border-radius:10px;
    max-width: 360px;
    background-color:${colors.lightgray};
    border:none;
}
.p-inputtext:enabled:focus {
    box-shadow:none; 
}
.p-checkbox .p-checkbox-box.p-highlight{
    border-color:${colors.pink}; 
    background-color:${colors.pink}
}
.field{
    margin-bottom:25px;
    
}
label {
    left: 20px;
}
.checkbox-invisible{
    span{
        display:flex; 
        justify-content:center; 
        align-items:center;
    }
    label {
        position: relative; 
        left:10px;
        margin-top:0; 
    }
    .p-float-label{
        margin:auto;
    }
}
.captcha-container{
    display:flex; 
    justify-content:center;
    margin-bottom: 40px;
}

`;