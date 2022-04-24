import styled from 'styled-components';

export const HeaderInVisibleWrapper = styled.header`
    min-height: 82vh;
    background: radial-gradient(50% 50% at 50% 50%, #CF0063 0%, #AE2176 100%);
    color: #FFFFFF; 
    display:flex; 
    flex-direction:column;
    align-items:center;
    text-align:center;
    #logo-title{
      max-width:95px; 
      max-height:58px;
      display:block;
      margin: 0 20px;
      img{
          width:100%
      }
      
    }
    h1{
        margin-top:90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h2{
        margin-bottom:50px;
    }
    p{
        font-weight: bold;
        font-size:20px;
    }
    #more-container{
        margin-top:100px;
        div{
            display:flex;
            justify-content:center;
        }
    }
    .p-button{
        margin-top:30px;
        width:270px;
        height:50px;
        font-family: "Roboto"

    }
    a{
        text-decoration:none;
    }

`;