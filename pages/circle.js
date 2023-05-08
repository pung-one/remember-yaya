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
        <Title>Yaya Jabbi Circle</Title>
        <Article>
          {language === "english" ? (
            <>
              <TextContainer1>
                The Yaya Jabbi Circle is a roundabout in St. Pauli, Hamburg,
                which was named after Yaya Jabbi on February 18, 2018.
              </TextContainer1>
              <TextImageBlock1 isOnMobile={viewportHeight > viewportWidth}>
                <TextContainer2 isOnMobile={viewportHeight > viewportWidth}>
                  The roundabout is a part of Gezi Park Fiction. The middle part
                  of the roundabout was supposed to become a fountain with two
                  female robbers. As this never happened, the roundabout did not
                  have a name before being named Yaya Jabbi Circle. The
                  Initiative in Remembrance of Yaya Jabbi and the Park Fiction
                  Committee decided to dedicate this place to Yaya Jabbi as a
                  memorial site.
                </TextContainer2>
                <ImageContainer1>
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
                width={"1200"}
                height={"900"}
                $isOnMobile={viewportHeight > viewportWidth}
              />
              <TextContainer3>
                On the 18th of February 2018 a street sign and a plaque with
                informationen about Yaya were put up by those groups at a
                manifestation. Two days later, both the street sign and the
                plaque have been removed by the city of Hamburg.
              </TextContainer3>
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
              <TextContainer1>
                Der Yaya Jabbi Circle ist ein Kreisel in St. Pauli, Hamburg, der
                am 18. Februar 2018 nach Yaya Jabbi benannt wurde.
              </TextContainer1>
              <TextImageBlock1 isOnMobile={viewportHeight > viewportWidth}>
                <TextContainer2 isOnMobile={viewportHeight > viewportWidth}>
                  Der Kreisel gehört zum Gezi Park Fiction. In der Mitte des
                  Kreisels sollte ein Räuberinnen-Brunnen entstehen. Da dies nie
                  passiert ist, hatte der Kreisel bis zu seiner Benennung keinen
                  Namen. Die Initiative in Gedenken an Yaya Jabbi und das Park
                  Fiction Committee hat entschieden, diesen Ort Yaya Jabbi zu
                  widmen als einen Ort der Erinnerung.
                </TextContainer2>
                <ImageContainer1>
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
                width={"1200"}
                height={"900"}
                $isOnMobile={viewportHeight > viewportWidth}
              />
              <TextContainer3>
                Am 18. Februar 2018 wurden ein Straßenschild und eine
                Informationstafel von diesen Gruppen installiert, bei einer
                Gedenk-Kundgebung. Zwei Tage später wurden sowohl das
                Straßenschild, als auch die Informationstafel von der Stadt
                Hamburg entfernt.
              </TextContainer3>
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
    </>
  );
}

const PageContainer = styled.main`
  position: relative;
  background: none;
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "30vh auto 5vh auto")};
`;

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

const Title = styled.h2`
  z-index: 2;
  background: none;

  margin-bottom: 4vw;
  padding: 0 10vw;
`;

const TextContainer1 = styled.p`
  background: none;
`;

const Article = styled.article`
  position: relative;
  background: none;
  line-height: 32px;
  padding: 0 12vw 5vh;
`;

const TextImageBlock1 = styled.section`
  position: relative;
  display: flex;
  background: none;
  overflow: hidden;
  margin: 4vw 0 4vw;
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          height: 100%;
          flex-direction: column-reverse;
          gap: 5vh;
        `
      : ""}
`;

const TextContainer2 = styled.p`
  padding-right: ${({ isOnMobile }) => (isOnMobile ? "0" : "3vw")};
  background: none;
  line-height: 32px;
  height: 100%;
  width: ${({ isOnMobile }) => (isOnMobile ? "100%" : "70%")};
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 0;
  height: 100%;
  width: 100%;
`;

const ImageContainer1 = styled.div`
  position: relative;
  width: 100%;
`;

const TextContainer3 = styled.p`
  margin: 4vw 0 4vw;
  line-height: 32px;
  background: none;
`;

const StyledImage2 = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  ${(props) =>
    !props.$isOnMobile
      ? css`
          &:hover {
            cursor: pointer;
            border: 2px solid white;
          }
          &:active {
            transform: scale(1.8);
          }
          transition: all 0.2s;
        `
      : ""}
`;
