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

@media (max-width : 600px){
    .merchant-bottom-card{
        flex-direction:column
    }
    .openings-container{
        width:100%;
    }
  }
`