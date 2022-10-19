import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`

  ${Variables};

  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }

  html {
    width:100%;
    scroll-behavior: smooth;
    background: black;
  }

  img,
  svg {
   width: 100%;
   max-width: 100%;
   vertical-align: middle;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default EstilosGlobales;
