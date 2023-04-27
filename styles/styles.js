import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    font-family: system-ui;
    font-size: 16px;
    padding: 0;
    background-color: #b6bfc1;
    color: black;
  }
  h1 {
    font-size: 3vh;
  }
  h2 {
    font-size: 24px;
    color: black;
  }
`;
