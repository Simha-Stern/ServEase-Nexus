// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
    font-style: italic ;
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    /* overflow-x: hidden;
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased; */
    }
`;

export default GlobalStyles;
