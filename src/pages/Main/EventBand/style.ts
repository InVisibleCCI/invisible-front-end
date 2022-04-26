import styled from 'styled-components';

interface EventBandWrapperProps{
    eventCardSize: "small" | "large"
}
export const EventBandWrapper = styled.div<EventBandWrapperProps>`
.events-band-container{
    display:flex;
    justify-content:space-between;
    margin-bottom:40px;
    margin-left:20px;

    .ais-InfiniteHits-item{
        max-width: ${props => props.eventCardSize == "large" ? "500px" : "" };
        min-width: ${props => props.eventCardSize == "large" ? "500px" : "" };;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 16px;
    
    }
}
h3{
    margin-bottom:40px
}

@media (max-width : 1200px){
    width:100%;
    .ais-InfiniteHits{
        margin-top:60px;
    }
    #results-container .ais-InfiniteHits-list{
        justify-content: space-around;
    }

    .events-band-container{
        max-width: 800px;
        margin: auto;
        display:flex;
        justify-content:space-around;
        margin-bottom:40px;
        flex-wrap: wrap;

    }
}
   
 
 .ais-InfiniteHits-item {
    max-width : 280px;
    min-width : 280px;
    margin-right:20px;
    margin-bottom:20px;
    border-radius:16px;


 }

 @media (max-width : 500px){
    padding: 0 20px;

    .events-band-container{
        display:flex;
        justify-content:center;
        margin-bottom:40px;
        margin-left:0px;
    
        .ais-InfiniteHits-item{
            max-width: ${props => props.eventCardSize == "large" ? "100%" : "" };
            min-width: ${props => props.eventCardSize == "large" ? "100%" : "" };;
            margin-right: 0px;
            margin-bottom: 20px;
            border-radius: 16px;
        
        }
    }
}
}`