import styled from "styled-components";
import { css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Circle({ language }) {
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
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>Circle</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <Article isOnMobile={viewportHeight > viewportWidth}>
          <Title>Yaya Jabbi Circle</Title>
          <TextContainer1 isOnMobile={viewportHeight > viewportWidth}>
            {language === "english"
              ? "The Yaya Jabbi Circle is a roundabout in St. Pauli, Hamburg, which was named after Yaya Jabbi on February 18, 2018."
              : "Der Yaya Jabbi Circle ist ein Kreisel in St. Pauli, Hamburg, der am 18. Februar 2018 nach Yaya Jabbi benannt wurde."}
          </TextContainer1>
          <TextContainer2 isOnMobile={viewportHeight > viewportWidth}>
            <StyledImage
              $isOnMobile={viewportHeight > viewportWidth}
              src={"/images/circle-sign.jpg"}
              alt={"banner"}
              width={"800"}
              height={"600"}
            />
            {language === "english"
              ? "The roundabout is a part of Gezi Park Fiction. The middle part of the roundabout was supposed to become a fountain with two female robbers. As this never happened, the roundabout did not have a name before being named Yaya Jabbi Circle. The Initiative in Remembrance of Yaya Jabbi and the Park Fiction Committee decided to dedicate this place to Yaya Jabbi as a memorial site."
              : "Der Kreisel gehört zum Gezi Park Fiction. In der Mitte des Kreisels sollte ein Räuberinnen-Brunnen entstehen. Da dies nie passiert ist, hatte der Kreisel bis zu seiner Benennung keinen Namen. Die Initiative in Gedenken an Yaya Jabbi und das Park Fiction Committee hat entschieden, diesen Ort Yaya Jabbi zu widmen als einen Ort der Erinnerung."}
          </TextContainer2>

          <StyledImage2
            src={"/images/circle-plakette.jpg"}
            alt={"banner"}
            width={"1200"}
            height={"900"}
            $isOnMobile={viewportHeight > viewportWidth}
          />
          <TextContainer3 isOnMobile={viewportHeight > viewportWidth}>
            {language === "english"
              ? "On the 18th of February 2018 a street sign and a plaque with informationen about Yaya were put up by those groups at a manifestation. Two days later, both the street sign and the plaque have been removed by the city of Hamburg."
              : "Am 18. Februar 2018 wurden ein Straßenschild und eine Informationstafel von diesen Gruppen installiert, bei einer Gedenk-Kundgebung. Zwei Tage später wurden sowohl das Straßenschild, als auch die Informationstafel von der Stadt Hamburg entfernt."}
          </TextContainer3>
          <StyledImage3
            $isOnMobile={viewportHeight > viewportWidth}
            src={"/images/circle-2023.jpg"}
            alt={"banner"}
            width={"800"}
            height={"600"}
          />
          <Caption isOnMobile={viewportHeight > viewportWidth}>
            {language === "english"
              ? "The Yaya-Jabbi-Circle on February 19, 2023"
              : "Der Yaya-Jabbi-Circle am 19. February 2023"}
          </Caption>
        </Article>
      </PageContainer>
    </>
  );
}

const PageTitle = styled.h1`
  z-index: 0;
  display: flex;
  justify-content: center;
  font-weight: lighter;
  color: #a2b0ad;
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          position: relative;
          font-size: 10vh;
          margin: 15vh 0 0;
        `
      : css`
          position: fixed;
          font-size: 10vw;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageContainer = styled.main`
  background: none;
  position: relative;
  max-width: 1100px;
  margin: ${({ isOnMobile }) =>
    isOnMobile ? "5vh 0 10vh" : "25vh auto 10vh auto"};
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

const TextContainer1 = styled.p`
  background: none;
  line-height: 32px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
`;

const TextContainer2 = styled.p`
  background: none;
  line-height: 32px;
  height: 100%;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  background: none;
  object-position: 50% 0;
  height: 100%;
  float: right;
  margin: ${(props) => (props.$isOnMobile ? "0 0 30px" : "0 0 10px 20px")};
  width: ${(props) => (props.$isOnMobile ? "100%" : "60%")};
`;

const TextContainer3 = styled.p`
  line-height: 32px;
  background: none;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
`;

const StyledImage2 = styled(Image)`
  object-fit: contain;
  height: 100%;
  align-self: center;

  ${(props) =>
    !props.$isOnMobile
      ? css`
          width: 90%;
          &:hover {
            cursor: pointer;
            border: 2px solid white;
          }
          &:active {
            transform: scale(1.8);
          }
          transition: all 0.2s;
        `
      : css`
          width: 100%;
        `}
`;

const StyledImage3 = styled(Image)`
  object-fit: contain;
  background: none;
  align-self: center;
  object-position: 50% 0;
  height: 100%;
  width: ${(props) => (props.$isOnMobile ? "100%" : "90%")};
`;

const Caption = styled.p`
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
`;
