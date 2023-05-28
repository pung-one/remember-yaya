import styled from "styled-components";
import { css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export default function Circle({ language, viewportHeight, viewportWidth }) {
  return (
    <>
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>Circle</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <Article isOnMobile={viewportHeight > viewportWidth}>
          <Title>Yaya Jabbi Circle</Title>

          <TextContainer1 isOnMobile={viewportHeight > viewportWidth}>
            {language === "english" ? (
              <>
                The{" "}
                <StyledLink
                  href="https://goo.gl/maps/mmQBQ4AJGNBruoWk6"
                  target="_blank"
                >
                  Yaya Jabbi Circle
                </StyledLink>{" "}
                is a roundabout in St. Pauli, Hamburg, which was named after
                Yaya Jabbi on February 18, 2018.
              </>
            ) : (
              <>
                Der{" "}
                <StyledLink
                  href="https://goo.gl/maps/mmQBQ4AJGNBruoWk6"
                  target="_blank"
                >
                  Yaya Jabbi Circle
                </StyledLink>{" "}
                ist ein Kreisel in St. Pauli, Hamburg, der am 18. Februar 2018
                nach Yaya Jabbi benannt wurde.
              </>
            )}
          </TextContainer1>
          <StyledImage1
            $isOnMobile={viewportHeight > viewportWidth}
            src={"/images/circle-map.png"}
            alt={
              "bird's eye view on the area around Yaya Jabbi Circle. Park Fiction on the middle left side, Fischmarkt and a tiny part of Elbe-river on the bottom"
            }
            width={"1280"}
            height={"785"}
          />
          <TextContainer2 isOnMobile={viewportHeight > viewportWidth}>
            <StyledImage2
              $isOnMobile={viewportHeight > viewportWidth}
              src={"/images/circle-sign.jpg"}
              alt={
                "Close up photo of the 'Yaya Jabbi Circle'-street sign on a sunny day. Park Fiction in the background"
              }
              width={"800"}
              height={"600"}
            />
            {language === "english"
              ? "The roundabout is a part of Gezi Park Fiction. The middle part of the roundabout was supposed to become a fountain with two female robbers. As this never happened, the roundabout did not have a name before being named Yaya Jabbi Circle. The Initiative in Remembrance of Yaya Jabbi and the Park Fiction Committee decided to dedicate this place to Yaya Jabbi as a memorial site."
              : "Der Kreisel gehört zum Gezi Park Fiction. In der Mitte des Kreisels sollte ein Räuberinnen-Brunnen entstehen. Da dies nie passiert ist, hatte der Kreisel bis zu seiner Benennung keinen Namen. Die Initiative in Gedenken an Yaya Jabbi und das Park Fiction Committee hat entschieden, diesen Ort Yaya Jabbi zu widmen als einen Ort der Erinnerung."}
          </TextContainer2>

          <StyledImage3
            src={"/images/circle-plakette.jpg"}
            alt={
              "A plaque qith text: HE WAS SEARCHING FOR A BETTER LIFE IN EUROPE, HE FOUND DEATH IN STATE DETENTION Yaya labbit was born in 1989 and raised in Gambia, West Africa. He lived with his family and went to school. After school he helped on the family's farm. Yaya's whole family and all of his neighbours liked him, as he was always sharing joy, happiness and kindness with them. He was hardworking and enjoyed studying. At the age of 15, he decided to further his education and go to a school far away from his hometown to study Islam and the Quran. In August 2013, he left Gambia and travelled to Libya. Three months later, in October 2013, he successfully crossed the Mediterranean Sea to pursue a better life in Europe. In Italy he took shelter in a refugee camp with his brother. When his brother mo ved to Germany, Yaya followed him after some days, and again they lived in the same refugee camp. This time in Halberstadt, East Germany. Yaya tried to find work and settle in Sachsen-Anhalt. However, he did not receive permission to work. Because they didn't have the opportunity to make a living in Sachsen-An-halt, the brothers came to Hamburg. Yaya arrived in Hamburg in November 2014. Here he continued to look for work and found a part-time job, Yaya was arrested by the police on 14. January 2016 on Hamburger Berg. He was accused of being in possession of 1,65 grams of cannabis. Four days later, he was brought to Hahnöfersand. On 19 February 2016, shortly before he was due to be released, Yaya was found dead in his cell. According to the judicial authority he committed suicide. However, the judicial authority also reported that there were no signs of a possible danger of suicide. Neither the so-called suici-de-screening, nor the officers who closed his cell on the evening of the 18 February 2016 reported any concerns. Yaya was a practising Muslim. Neither his family nor his friends regarded him as being in danger of committing suicide. Jaja is missed greatly by his family, friends and neighbours who loved and respected him as a kind and caring person. May his soul rest in peace. »And when we speak we are afraid our words will not be beard nor welcomed but when we are silent we are still afraid. So it is better to speak remembering we were never meant to survive.« - AUDRE LORDE"
            }
            width={"1200"}
            height={"900"}
            $isOnMobile={viewportHeight > viewportWidth}
          />
          <TextContainer3 isOnMobile={viewportHeight > viewportWidth}>
            {language === "english"
              ? "On the 18th of February 2018 a street sign and a plaque with informationen about Yaya were put up by those groups at a manifestation. Two days later, both the street sign and the plaque have been removed by the city of Hamburg."
              : "Am 18. Februar 2018 wurden ein Straßenschild und eine Informationstafel von diesen Gruppen installiert, bei einer Gedenk-Kundgebung. Zwei Tage später wurden sowohl das Straßenschild, als auch die Informationstafel von der Stadt Hamburg entfernt."}
          </TextContainer3>
          <ImageContainer isOnMobile={viewportHeight > viewportWidth}>
            <StyledImage4
              src={"/images/circle-2023.jpg"}
              alt={
                "The Yaya Jabbi Circle on February 19, 2023. Two stones in the foreground with Yayas name written on them. Protesters in the background, with a banner 'Racism Kills'"
              }
              width={"768"}
              height={"576"}
            />
            <Caption>
              {language === "english"
                ? "The Yaya-Jabbi-Circle on February 19, 2023"
                : "Der Yaya-Jabbi-Circle am 19. Februar 2023"}
            </Caption>
          </ImageContainer>
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

const Article = styled.article`
  background: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0 10vw" : "0 10vw 30px 2.5vw")};
`;

const Title = styled.h2`
  background: none;
  margin-bottom: 10px;
`;

const TextContainer1 = styled.p`
  background: none;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--secondary);
  &:hover {
    color: var(--accent);
  }
  transition: all 0.2s;
`;

const StyledImage1 = styled(Image)`
  object-fit: contain;
  background: none;
  align-self: center;
  object-position: 50% 0;
  height: 100%;
  box-shadow: 0 0 3vh grey;
  width: ${(props) => (props.$isOnMobile ? "100%" : "80%")};
`;

const TextContainer2 = styled.p`
  background: none;
  height: 100%;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
`;

const StyledImage2 = styled(Image)`
  object-fit: contain;
  background: none;
  object-position: 50% 0;
  height: 100%;
  float: right;
  box-shadow: 0 0 3vh grey;

  margin: ${(props) => (props.$isOnMobile ? "0 0 30px" : "0 0 10px 20px")};
  width: ${(props) => (props.$isOnMobile ? "100%" : "60%")};
`;

const TextContainer3 = styled.p`
  background: none;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
`;

const StyledImage3 = styled(Image)`
  object-fit: contain;
  height: 100%;
  align-self: center;
  box-shadow: 0 0 3vh grey;
  ${(props) =>
    !props.$isOnMobile
      ? css`
          width: 80%;
          &:hover {
            cursor: pointer;
            border: 1px solid white;
            box-shadow: none;
          }
          &:active {
            transform: scale(2);
          }
          transition: all 0.2s;
        `
      : css`
          width: 100%;
        `}
`;

const ImageContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
`;

const StyledImage4 = styled(Image)`
  object-fit: contain;
  background: none;
  object-position: 50% 0;
  box-shadow: 0 0 3vh grey;
  width: 100%;
  height: 100%;
`;

const Caption = styled.p`
  margin-top: 10px;
  background: none;
  font-size: 0.8rem;
`;
