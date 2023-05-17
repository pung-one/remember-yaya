import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
  font-family: "NotoSerif";
  src: url("./fonts/NotoSerif-Regular.ttf");
  font-weight: normal;
  font-display: swap;
  }

  @font-face {
  font-family: "NotoSerif";
  src: url("./fonts/NotoSerif-Bold.ttf");
  font-weight: bold;
  font-display: swap;
  }

  @font-face {
  font-family: "Oxygen";
  src: url("./fonts/Oxygen-Light.ttf");
  font-weight: light;
  font-display: swap;
  }

  @font-face {
  font-family: "Oxygen";
  src: url("./fonts/Oxygen-Regular.ttf");
  font-weight: normal;
  font-display: swap;
  }

  @font-face {
  font-family: "Oxygen";
  src: url("./fonts/Oxygen-Bold.ttf");
  font-weight: bold;
  font-display: swap;
  }

  :root{
    --primary-background: #b6bfc1;
    --primary-accent: #929a9c;
    --accent: #f15a30;
    --secondary: white;
    --headline-font: Oxygen;
    --content-font: NotoSerif;

    font-size: 18px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    font-family: var(--content-font);
    
    padding: 0;
    background-color: var(--primary-background);
    color: black;
  }
  h1 {
    font-family: var(--headline-font);
    font-weight: bold;
    color: var(--primary-accent);
    opacity: 0.4;
    font-size: 8.5vw;
  }
  h2 {
    font-family: var(--headline-font);
    font-weight: normal;
    font-size: 32px;
  }
  p {
    line-height: 1.8;
  }
`;
