import styled from 'styled-components';

export const StarWrapper = styled.div`
    margin-right: 5px;
`;

export const SearchWrapper = styled.div`
    position: absolute;
    top: 15px;
    right: 30px;
    @media (max-width : 1200px){
        top:18px;
        right:24px; 
        svg{
            width:22px;
            height:22px;
        }
    }
    @media (max-width : 500px){
        top:20px;
        right:24px; 
        svg{
            width:20px;
            height:20px;
        }
    }
`;