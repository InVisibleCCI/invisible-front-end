import styled from 'styled-components';

export const EventCardWrapper = styled.section`
    width: 312px;
    height: 361px;
    position: relative;
`;

interface EventImageWrapperProps {
  url: string
}
export const EventImageWrapper = styled.div<EventImageWrapperProps>`
    position: absolute;
    width: 292px;
    height: 200px;

    // image
    background-image: url(${props => props.url});
    background-size: 292px;

    filter: drop-shadow(-3px 6px 12px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
`;

interface EventTextWrapperProps {
  color: string
}
export const EventTextWrapper = styled.div<EventTextWrapperProps>`
    /* position */
    position: absolute;
    width: 292px;
    height: 167px;
    top: 174px;
    
    /* color */
    background: ${props => props.color};
    
    box-shadow: -3px 6px 12px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 16px 16px;
    
    margin: 10px 0px;
    
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
