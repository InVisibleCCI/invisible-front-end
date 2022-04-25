import styled from 'styled-components';
import { colors } from 'utils/styles';

export const MainWrapper = styled.main`

    #button-tags-container{
        display:flex;
        justify-content:space-between; 
        margin:70px 0;
    }
    .container{
        width:1200px; 
        margin:auto;
    }
    @media (max-width : 1200px){
        .container{
            width:100%;
            padding: 0 10px;
        } 
        #button-tags-container{
            overflow-x:scroll;
            padding-bottom: 20px;
        }
        #button-tags-container::-webkit-scrollbar {
            margin-top: 10px;
            width: 8px;
            height: 8px;
        }
        #button-tags-container::-webkit-scrollbar-thumb {
            background-color: ${colors.pink};
            border-radius: 25px;
        }
    
          
    }
}`
