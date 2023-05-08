import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "Didot Regular";
  src: local("Didot Regular"),
    url("./fonts/Didot Regular.ttf") format("truetype");
}

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
    font-family: "Didot Regular";
    opacity: 0.7;
    font-size: 14vh;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
    color: black;
  }
`;
