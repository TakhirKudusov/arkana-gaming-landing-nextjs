"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    ::-webkit-scrollbar {
      width: 16px;
      background: white;
    }

    ::-webkit-scrollbar-thumb {
      background: black;
      width: 16px;
    }

    ::-webkit-scrollbar-track {
      width: 16px;
    }
    
    @media screen and (max-width: 767px) {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  html {
    overflow-x: hidden;
  }
  
  html,
  body {
    max-width: 100vw;
    background-color: white;
  }
  

  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyles;
