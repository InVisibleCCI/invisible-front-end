import styled from "styled-components";
import { colors } from "utils/styles";


export const MapAndEventsMerchantWrapper = styled.section`
.events-container{
    .item{
        max-width: 230px;
        min-width: 230px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 16px;
        section{
            width:100%;
        }
        .card-title{
            font-size:16px;
            margin-top:20px;
        }
    
    }
    .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button{
        background-color:${colors.pink}
    }

}

.leaflet-container{
    width:560px; 
    margin:auto;
    margin-top: 60px;

}

`