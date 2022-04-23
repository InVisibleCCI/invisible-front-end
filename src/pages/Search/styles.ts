import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    margin:  41px auto 110px auto;
    position: relative;
    
    /* clears the 'X' from Internet Explorer */
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
    
    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

    .algolia-searchBox {
        max-width: 1300px;
        min-width: 800px;
        padding: 2px;
        
        .ais-SearchBox-form {
            width: 100%;
        }
    
        .ais-SearchBox-submit svg {
            color: #000;
        }
    
        .ais-SearchBox-submit {
            pointer-events: none;
            transform: translate(-60px);
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            
            display: none;
        }
        
        .ais-SearchBox-reset {
            display: none;
        }
    
        .ais-SearchBox-input {
            height: 50px;
            border-radius: 25px;
            border: none;
            width: 100%;
            padding-left: 60px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        }
        
        input:focus {
            outline: none;
        }
    
        input::placeholder {
            font-size: 12px;
            padding: 15px;
        }
    }
`;