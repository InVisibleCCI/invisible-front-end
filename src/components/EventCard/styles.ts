import styled from 'styled-components';

interface EventCardWrapperProps{
    cardSize: "small"|"large";
}

export const EventCardWrapper = styled.section<EventCardWrapperProps>`
    width: ${props => props.cardSize === "small" ? "312px" :"604px"};
    height: ${props => props.cardSize === "small" ? "361px" :"637px"};
    position: relative;
    .description{
        position: absolute; 
        bottom: 10px;
        height:64px;
        overflow:hidden;
        padding: 10px 10px 10px 0;
        left:15px;

    }
`;

interface EventImageWrapperProps {
  url: string;
  cardSize: "small"|"large";
}
export const EventImageWrapper = styled.div<EventImageWrapperProps>`
    position: absolute;

    width: ${props => props.cardSize === "small" ? "292px" :"594px"};
    height: ${props => props.cardSize === "small" ? "200px" :"460px"};

    // image
    background-image: url(${props => props.url});
    background-size: 292px;
    background-repeat: no-repeat;
    background-size:cover;

    filter: drop-shadow(-3px 6px 12px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
`;

interface EventTextWrapperProps {
  color: string; 
  cardSize: "small"|"large";
}
export const EventTextWrapper = styled.div<EventTextWrapperProps>`
    /* position */
    position: absolute;
    width: ${props => props.cardSize === "small" ? "292px" :"594px"};
    height: ${props => props.cardSize === "small" ? "167px" :"189px"};
    top: ${props => props.cardSize === "small" ? "174px" :"437px"};
    
    /* color */
    background: ${props => props.color};
    
    box-shadow: -3px 6px 12px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 16px 16px;
    
    margin: 10px 0px;
    color: white;
    
    .reviews {
        position: absolute;
        bottom: 13px;
        left: 23px;
        
        display: flex;
        flex-direction: row;
        
        /* text */
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        
        color: #FFF;
    }
    
`;

export const EventInfosWrapper = styled.div`
    position: absolute;
    top: 37px;
    left: 15px;
    
    .card-title {
        font-family: Montserrat Alternates;
        font-size: 20px;
        font-weight: semi-bold;
        color: #FFF;
        margin-bottom: 11px;
        margin-Top: 0px;
    }
    
    .distance {
        /* text */
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        
        color: #FFF;
    }

`;
