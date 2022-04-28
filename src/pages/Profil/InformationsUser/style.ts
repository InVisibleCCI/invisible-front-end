import styled from 'styled-components';

export const InformationsUserWrapper = styled.section`
    min-width:500px; 
    padding:10px;
    margin-auto; 
    margin-bottom: 100px;
    display: flex; 
    flex-direction:column; 
    align-items:center;
    .button-profile{
      margin-top: 20px;
    }
    @media (max-width : 500px){
      max-width:100%; 
      min-width:100%;
  }
`;

interface ProfilImageWrapperProps {
  url: string;
  alt: string;
  size: "small" | "medium" | "large"
}

const getImageSize = (size: string) => {
  switch (size) {
    case "small":
      return "40px";
    case "medium":
      return "110px";
    case "large":
      return "190px";
    default:
      return "40px";
  }
}

export const ProfilImageWrapper = styled.div.attrs((props: ProfilImageWrapperProps) => ({
  role: "img",
  'aria-label': `Image: ${props.alt}. avatar utilisateur;`,
})) <ProfilImageWrapperProps>`  
      // image
      background-image: url(${props => props.url});
      background-repeat: no-repeat;
      background-size:cover;
      background-position:center;
      border-radius:50%;
      height: ${props => getImageSize(props.size)}; 
      width:${props => getImageSize(props.size)}; ;  
      filter: drop-shadow(-3px 6px 12px rgba(0, 0, 0, 0.25));
      margin-bottom: 20px;

     
  `;