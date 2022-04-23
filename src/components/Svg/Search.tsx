import React from "react";
import { SearchWrapper } from "./styles";

/** Return the SV for the search icon
 *
 * @constructor
 */
export const SearchIcon = () => {

  return <SearchWrapper>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_410_80)">
              <path d="M25.6447 22.5557L20.5817 17.6005C20.3532 17.3769 20.0435 17.2526 19.7185 17.2526H18.8907C20.2923 15.4982 21.1251 13.2915 21.1251 10.8909C21.1251 5.18024 16.3974 0.55307 10.5626 0.55307C4.72776 0.55307 0 5.18024 0 10.8909C0 16.6015 4.72776 21.2287 10.5626 21.2287C13.0153 21.2287 15.27 20.4136 17.0626 19.0419V19.852C17.0626 20.1701 17.1895 20.4733 17.4181 20.6969L22.481 25.6521C22.9583 26.1193 23.7302 26.1193 24.2025 25.6521L25.6396 24.2456C26.1169 23.7784 26.1169 23.0229 25.6447 22.5557ZM10.5626 17.2526C6.9723 17.2526 4.06252 14.4097 4.06252 10.8909C4.06252 7.37703 6.96722 4.52915 10.5626 4.52915C14.1528 4.52915 17.0626 7.37206 17.0626 10.8909C17.0626 14.4048 14.1579 17.2526 10.5626 17.2526Z" fill="black">
                {/* for narrator to read */}
                <title>Rechercher</title>
              </path>
          </g>
          <defs>
              <clipPath id="clip0_410_80">
                  <rect width="26.0001" height="25.4469" fill="white" transform="translate(0 0.55307)"/>
              </clipPath>
          </defs>
      </svg>
  </SearchWrapper>
}
