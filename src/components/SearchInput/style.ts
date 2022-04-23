import styled from 'styled-components';

export const SearchInputWrapper = styled.span`
width:915px;
.p-input-icon-right > i:last-of-type{
    right:1.5em; 
    color:black;
}
input{
    width:915px;
    height:50px;
    border-radius:46px;
    border:none;
    padding:8px 20px;
}
.p-inputtext:enabled:focus{
    box-shadow:none;
}
`;