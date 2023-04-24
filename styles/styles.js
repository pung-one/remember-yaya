import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    font-family: system-ui;
    font-size: 2vh;
    padding: 0;
    color: black;
  }
  h1 {
    font-size: 3.5vh;
  }
  h2 {
    font-size: 2.5vh;
  }
`;
