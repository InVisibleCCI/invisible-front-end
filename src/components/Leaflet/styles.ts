import styled from 'styled-components';

export const LeafletMapWrapper = styled.div`
@media (max-width : 1200px){
    width:100%
}
    .leaflet-container {
        height: 500px;
        width: 419px;
        border-radius: 16px;
        filter: drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.25));
        @media (max-width : 1200px){
            width:100%;
        }

        @media (max-width : 500px){
            border-radius : 0;
        }
    }
    
    .marker-cluster-small div {
        background-color: transparent;
        background-image: url("https://cdn.aquarius.irish/apps/files_sharing/publicpreview/FD28PGECmy2b7Dg?x=1905&y=393&a=true&file=pin.png&scalingup=0");
        background-repeat: no-repeat;
        background-size: cover;
        width: 40px;
        height: 70px;
        margin-left: -27px;
        margin-top: 0;
        
        // position the text to display how many markers on this marker group
        span {
            color: white;
            font-weight: bold;
            font-size: 16px;
            position: absolute;
            top: 23px;
            right: 42px;
        }
    }

    .marker-cluster-small {
        background-color: transparent;
        width: 40px;
        height: 70px;
    }

    .leaflet-div-icon{
        background-color: transparent;
        border: none;
        cursor:unset;
    }
`;