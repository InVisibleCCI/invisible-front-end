import styled from 'styled-components';

export const DesktopResultWrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    position: relative;
        
    .ais-InfiniteHits-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-left: 0;
        
        .ais-InfiniteHits-item {
            width: 292px;
            height: 350px;
            margin-bottom: 25px;
            margin-right: 25px;
        }
    }
`;

export const ResultWrapper = styled.div`
   display: flex;
   flex-direction: row-reverse;
`;

export const MapDivider = styled.div`
   width: 2px;
   height: 540px;
   background-color: rgba(0,0,0,0.5);
   margin: auto 39px auto 0;
   position: absolute;
   top: 0px;
   right: 500px;
`;

export const MapWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    width: 450px;
    height: 500px;
    
    position: absolute;
    top: 0;
    right: 0;
`;

export const EventResultWrapper = styled.div`
    margin-right: 600px;
    margin-left: 20px; 
`;