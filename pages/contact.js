import styled from "styled-components";
import { css } from "styled-components";
import { useState, useEffect } from "react";

export default function Contact({ language }) {
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");

  function handleResize() {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <>
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>Contact</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <Article isOnMobile={viewportHeight > viewportWidth}>
          <Title>
            {language === "english"
              ? "Contact us via Email:"
              : "Kontaktiere uns per Email"}
          </Title>
          <TextContainer isOnMobile={viewportHeight > viewportWidth}>
            <a href="mailto:rememberjajadiabi@riseup.net">
              rememberjajadiabi@riseup.net
            </a>
          </TextContainer>
        </Article>
      </PageContainer>
    </>
  );
}

const PageTitle = styled.h1`
  background: none;
  z-index: 0;
  display: flex;
  justify-content: center;
  font-weight: lighter;
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          position: relative;
          font-size: 7vh;
          margin: 15vh 0 0;
        `
      : css`
          position: fixed;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageContainer = styled.main`
  background: none;
  position: relative;
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "25vh auto 0 auto")};
`;

const Article = styled.article`
  background: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0 10vw" : "0 20vw 30px 5vw")};
`;

const Title = styled.h2`
  background: none;
  margin-bottom: 10px;
`;

const TextContainer = styled.p`
  background: none;
  > * {
    background: none;
  }
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
  margin-bottom: 45px;
  a {
    text-decoration: underline;
    color: var(--secondary);
    &:hover {
      color: var(--accent);
    }
    transition: all 0.2s;
  }
`;
