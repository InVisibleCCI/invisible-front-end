import styled from 'styled-components';

export const MerchantInfoCardWrapper = styled.section`
#icons-social-container{
    display:flex;
    justify-content:center;
}
.header-info-merchant{
    display:flex;
    h1{
        margin-top:0;
        margin-bottom:20px;
    }
    .right-info-merchant{
        margin-left:40px;
    }
}
.merchant-bottom-card{
    margin-top:40px; 
    display:flex; 
}
.openings-container{
    width:50%;
}

@media (max-width: 800px) {
    .openings-container, .header-info-merchant{
        margin-left: 10vw;
    }
}


@media (max-width: 500px) {
    .openings-container, .header-info-merchant, .right-info-merchant{
        margin-left: 0vw;
    }
    .merchant-bottom-card{
        margin-left:10vw;
    }
    .right-info-merchant{
        margin-left:0vw !important;
    }
}

@media (max-width : 600px){
    .merchant-bottom-card{
        flex-direction:column
    }
    .openings-container{
        width:100%;
    }
    .merchant-logo{
        margin-left:-12vw;
    }
  }
`