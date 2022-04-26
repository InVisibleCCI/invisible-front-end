import styled from 'styled-components';

export const MerchantPageWrapper = styled.main`
#search-input{
  margin:auto;
  margin-top:50px;
  margin-bottom:100px; 
  width:1200px;
  display:flex; 
  justify-content:center;

  input{
    box-shadow : 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

}
.container{
  width:1200px; 
  margin:auto;
  display:flex;
  margin-bottom:150px;

  section{
    width:50%;
  }
}
@media (max-width : 1200px){
  .container{
    width:100%;
    padding:20px;
    flex-direction: column;
    section{
      margin:auto;
    }
  }
}
@media (max-width : 800px){
  .container{
    section{
      margin:auto;
      width:80%;
    }
  }
  #search-input{
    width:70%;
  }
}


`