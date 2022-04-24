import styled from 'styled-components';
import { colors } from 'utils/styles';

interface EventCardWrapperProps{
    cardSize: "small"|"large";
}

export const EventCardWrapper = styled.section<EventCardWrapperProps>`
`;

interface EventImageWrapperProps {
  url: string;
  alt: string;
  cardSize: "small" | "large"
}
export const EventImageWrapper = styled.div.attrs((props: EventImageWrapperProps) => ({
  role: "img",
  'aria-label': `Image: ${props.alt}. Prochaine activité;`,
}))<EventImageWrapperProps>`

    // image
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size:cover;

    filter: drop-shadow(-3px 6px 12px rgba(0, 0, 0, 0.25));
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    min-height:195px;
`;

interface EventTextWrapperProps {
  color: string; 
  cardSize: "small"|"large";
}
export const EventTextWrapper = styled.div<EventTextWrapperProps>`
  background-color : ${props => props.color};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 15px;

  .reviews{
    display: flex; 
    color: ${colors.textColorWhite};
    font-size: 20px;
  }
  .icons-infos-event{
      display: flex; 
      justify-content: space-between; 
      width:100%; 
  }
    
`;

export const EventInfosWrapper = styled.div`    
    .card-title {
        font-family: Montserrat Alternates;
        font-size: 20px;
        font-weight: semi-bold;
        color: #FFF;
        margin-bottom: 11px;
        margin-top: 0px;
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
