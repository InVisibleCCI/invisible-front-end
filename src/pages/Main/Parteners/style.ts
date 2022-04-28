import styled from 'styled-components';

export const PartnersWrapper = styled.section`
text-align:center;
#partners-container{
    display:flex; 
    justify-content:space-around; 
    width:100%;
    margin:80px 0;
}
@media (max-width : 800px){
    #partners-container {
        flex-wrap : wrap;
        .logo-container{
            margin-bottom:20px;
        }
    }
}}`