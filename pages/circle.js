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
    <PageContainer>
      <HeroSection>
        <PageTitle>Circle</PageTitle>
      </HeroSection>
      <Title>Yaya Jabbi Circle</Title>
      <Article>
        {language === "english" ? (
          <>
            <p>
              The Yaya Jabbi Circle is a roundabout in St. Pauli, Hamburg, which
              was named after Yaya Jabbi on the 18th of February 2018.
            </p>
            <TextImageBlock1 isOnMobile={viewportHeight > viewportWidth}>
              <TextContainer1 isOnMobile={viewportHeight > viewportWidth}>
                The roundabout is a part of Gezi Park Fiction. The middle part
                of the roundabout was supposed to become a fountain with two
                female robbers. As this never happened, the roundabout did not
                have a name before being named Yaya Jabbi Circle. The Initiative
                in Remembrance of Yaya Jabbi and the Park Fiction Committee
                decided to dedicate this place to Yaya Jabbi as a memorial site.
              </TextContainer1>
              <ImageContainer1 isOnMobile={viewportHeight > viewportWidth}>
                <StyledImage
                  src={"/images/circle-sign.jpg"}
                  alt={"banner"}
                  width={"800"}
                  height={"600"}
                />
              </ImageContainer1>
            </TextImageBlock1>

            <StyledImage2
              src={"/images/circle-plakette.jpg"}
              alt={"banner"}
              width={"800"}
              height={"600"}
            />
            <TextBlock>
              <p>
                On the 18th of February 2018 a street sign and a plaque with
                informationen about Yaya were put up by those groups at a
                manifestation. Two days later, both the street sign and the
                plaque have been removed by the city of Hamburg.
              </p>
            </TextBlock>
            <StyledImage
              src={"/images/circle-2023.jpg"}
              alt={"banner"}
              width={"800"}
              height={"600"}
            />
            <p>The Yaya-Jabbi-Circle on February 19, 2023</p>
          </>
        ) : (
          <>
            <p>
              Der Yaya Jabbi Circle ist ein Kreisel in St. Pauli, Hamburg, der
              am 18. Februar 2018 nach Yaya Jabbi benannt wurde.
            </p>
            <TextImageBlock1 isOnMobile={viewportHeight > viewportWidth}>
              <TextContainer1 isOnMobile={viewportHeight > viewportWidth}>
                Der Kreisel gehört zum Gezi Park Fiction. In der Mitte des
                Kreisels sollte ein Räuberinnen-Brunnen entstehen. Da dies nie
                passiert ist, hatte der Kreisel bis zu seiner Benennung keinen
                Namen. Die Initiative in Gedenken an Yaya Jabbi und das Park
                Fiction Committee hat entschieden, diesen Ort Yaya Jabbi zu
                widmen als einen Ort der Erinnerung.
              </TextContainer1>
              <ImageContainer1 isOnMobile={viewportHeight > viewportWidth}>
                <StyledImage
                  src={"/images/circle-sign.jpg"}
                  alt={"banner"}
                  width={"800"}
                  height={"600"}
                />
              </ImageContainer1>
            </TextImageBlock1>

            <StyledImage2
              src={"/images/circle-plakette.jpg"}
              alt={"banner"}
              width={"800"}
              height={"600"}
            />
            <TextBlock>
              <p>
                Am 18. Februar 2018 wurden ein Straßenschild und eine
                Informationstafel von diesen Gruppen installiert, bei einer
                Gedenk-Kundgebung. Zwei Tage später wurden sowohl das
                Straßenschild, als auch die Informationstafel von der Stadt
                Hamburg entfernt.
              </p>
            </TextBlock>
            <StyledImage
              src={"/images/circle-2023.jpg"}
              alt={"banner"}
              width={"800"}
              height={"600"}
            />
            <p>Der Yaya-Jabbi-Circle am 19. February 2023</p>
          </>
        )}
      </Article>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  position: relative;
  max-width: 1100px;
  margin: 0 auto 5vh;
`;

const HeroSection = styled.section`
  margin: 10vh 0 3vh;
  height: 20vh;
`;

const PageTitle = styled.h1`
  position: relative;
  z-index: 0;
  color: #f15a30;
  font-weight: lighter;
  font-style: italic;
`;

const Title = styled.h2`
  z-index: 2;
  margin-bottom: 3vh;
  padding: 0 10vw;
`;

const Article = styled.article`
  position: relative;
  line-height: 25px;
  padding: 0 10vw 5vh;
`;

const TextImageBlock1 = styled.section`
  position: relative;
  display: flex;
  height: 35vh;
  overflow: hidden;
  margin: 5vh 0 5vh;
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          height: 100%;
          flex-direction: column-reverse;
          gap: 5vh;
        `
      : ""}
`;

const TextContainer1 = styled.p`
  padding-right: ${({ isOnMobile }) => (isOnMobile ? "0" : "3vw")};
  overflow: scroll;
  height: 100%;
  width: ${({ isOnMobile }) => (isOnMobile ? "100%" : "70%")};
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 0 0;
  height: 100%;
  width: 100%;
`;

const ImageContainer1 = styled.div`
  position: relative;
  width: 100%;
  height: ${({ isOnMobile }) => (isOnMobile ? "100%" : "100%")};
`;

const TextBlock = styled.section`
  margin: 5vh 0 5vh;
`;

const StyledImage2 = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }
  &:active {
    transform: scale(2);
  }
  transition: all 0.2s;
`;
