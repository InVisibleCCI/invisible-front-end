import styled from 'styled-components';

export const DesktopResultWrapper = styled.div`
    min-width: 1200px;
    max-width: 1200px;
    margin: auto;
    .ais-InfiniteHits-loadMore{
        display:none;
    }
    h3{
        margin-top:0;
    }
    @media (max-width : 1200px){
        min-width: 100%;
        max-width: 100%; 
        padding : 0 40px;
    }
    @media (max-width : 500px){
        min-width: 100%;
        max-width: 100%; 
        padding : 0;
    }
        
`;

export const ResultWrapper = styled.div`
   margin-bottom : 150px;
   display:flex;
   justify-content: space-between;
   width:100%;

   @media (max-width : 1200px){
    flex-direction : column-reverse; 
    }
}
`;

export const MapDivider = styled.div`
   width: 2px;
   height: 540px;
   background-color: rgba(0,0,0,0.5);
   margin-right: 70px;
   margin-left: 50px;
   @media (max-width : 1200px){
    display:none;
}
`;

export const MapWrapper = styled.div`
    width:50%;
    position:sticky; 
    top: 80px;
    height:fit-content;
    display : flex;
    align-items: center;

    @media (max-width : 1200px){
        position:relative;
        top:0; 
        margin-left:0;
        width: 100%;
        margin: 40px 0;

    }

`;

export const EventResultWrapper = styled.div`

width:50%; 

@media (max-width : 1200px){
    width:100%;
    .ais-InfiniteHits{
        margin-top:60px;
    }
    #results-container .ais-InfiniteHits-list{
        justify-content: space-around;
    }
}
   
.ais-InfiniteHits-list {
 list-style-type: none;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 padding-left: 0;
 width:100%;
 
 .ais-InfiniteHits-item {
    max-width : 280px;
    min-width : 280px;
    margin-right:20px;
    margin-bottom:20px;
    border-radius:16px;


 }

 @media (max-width : 500px){
    padding: 0 20px;
}



`;