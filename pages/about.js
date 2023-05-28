import styled from "styled-components";
import { css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export default function About({ language, viewportHeight, viewportWidth }) {
  return (
    <>
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>About</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <Article isOnMobile={viewportHeight > viewportWidth}>
          <Title>Yaya Jabbi</Title>
          <TextContainer1 isOnMobile={viewportHeight > viewportWidth}>
            <StyledImage1
              $isOnMobile={viewportHeight > viewportWidth}
              src={"/images/Yaya_Jabbi.jpg"}
              alt={"A photo of Yaya Jabbi smiling, with a phone in his hand"}
              width={"720"}
              height={"960"}
            />
            {language === "english" ? (
              <>
                Yaya was arrested by the police on the 14th of January 2016 at
                Hamburger Berg. Four days later he was brought to remand prison
                Hahnöfersand.
                <br />
                <br />
                In the night from the 18th to the 19th of February 2016 Yaya
                died in his cell.
                <br />
                <br /> According to the judicial authority he committed suicide.
                According to the judicial authority there were no signs of a
                possible danger of suicide. Neither the so-called
                suicide-screening, nor the officers who closed his cell on the
                evening of the 18th of February 2016 reported anything.
                <br /> Yaya was a Muslim who was neither by his family nor by
                his friends seen as being in danger of committing suicide.
                <br />
                <br />
                Here you can watch a movie about the{" "}
                <StyledLink href={"/the-life-of-yaya-jabbi"}>
                  Life of Yaya Jabbi
                </StyledLink>
                .
              </>
            ) : (
              <>
                Yaya wurde am 14. Januar 2016 am Hamburger Berg von der Polizei
                festgenommen. Vier Tage später wurde er in die Untersuchungshaft
                nach Hahnöfersand verlegt.
                <br />
                <br />
                In der Nacht vom 18. auf den 19. Februar 2016 starb Yaya in
                seiner Zelle.
                <br />
                <br />
                Laut Justizbehörde hat Yaya Suizid begangen. Laut Justizbehörde
                gab es jedoch im Vorwege keine Anzeichen einer möglichen
                Suizidgefahr, weder das sogenannte Suizidscreening ergab dazu
                Anhaltspunkte, noch berichteten die Beamten, die am Abend des
                18.02.2016 gegen 18.30 Uhr die Zelle verschlossen, dass Yaya
                suizidgefährdet sei.
                <br />
                Yaya war gläubiger Muslim und weder seine Familie, noch seine
                Freunde sahen ihn in Gefahr, Suizid zu begehen.
                <br />
                <br />
                Hier kannst du einen{" "}
                <StyledLink href={"/the-life-of-yaya-jabbi"}>
                  Film über Yayas Leben
                </StyledLink>{" "}
                schauen.
              </>
            )}
          </TextContainer1>
          <Title>
            {language === "english"
              ? "Initiative in Remembrance of Yaya Jabbi"
              : "Initiative in Gedenken an Yaya Jabbi"}
          </Title>
          <TextContainer2 isOnMobile={viewportHeight > viewportWidth}>
            {language === "english"
              ? "After Yayas death the Initiative in Remembrance of Yaya Jabbi was founded. It is standing up for a clearing of all the circumstances of his death and wants an active remembrance, public notice and recognition of his death. Also the Initiative wants to reach attention and rethinking of the politics of “war on drugs”, that were responsible for Yaya Jabbi arrest in the first place. Demands are an end of the so-called “task force” in Hamburg, a stop of the racist controls and a perspective, solidarity and support beyond drug labour. In the Initiative are friends and family of Yaya Jabbi, as well as activists from different antiracist and antifascist contexts."
              : "Nach Yayas Tod hat sich die Initiative in Gedenken an Yaya Jabbi gegründet. Sie setzt sich für eine lückenlose Aufklärung der Umstände seines Todes ein und fordert aktives Erinnern, öffentliche Wahrnehmung und Anerkennung des Todes von Yaya Jabbi ein. Außerdem soll eine Aufmerksamkeit und ein Umdenken der aktuellen Politik des „Kriegs gegen Drogen“ erreicht werden, die überhaupt zur Festnahme Yaya Jabbis geführt hat. Gefordert wird unter anderem ein Ende der sogenannten „Task Force“ in Hamburg, ein Stop der rassistischen Polizeikontrollen und ein Weiterdenken im Hinblick auf die Solidarität und Unterstützung mit Menschen in Drogenarbeit. Die Initiative setzt sich zusammen aus Freunden und Familie von Yaya Jabbi und Aktivist_innen aus verschiedenen antirassistischen und antifaschistischen Zusammenhängen."}
          </TextContainer2>
        </Article>
        <StyledImage2
          $isOnMobile={viewportHeight > viewportWidth}
          src={"/images/Banner_2.jpg"}
          alt={
            "Three front banners hold by people at a protest march. Left one says 'Freedom of Movement', second one 'in Gedenken an Jaja Diabi, stoppt die rassistischen Konktrollen! in remembrance of Jaja Diabi, stop the racist police controls! en mémoire de Jaja Diabi, s'arrête les contrôles racistes', third one 'solidarity for everyone' "
          }
          width={"959"}
          height={"367"}
        />
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
  gap: 40px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0 10vw" : "0 10vw 30px 2.5vw")};
`;

const Title = styled.h2`
  background: none;
  margin-bottom: 10px;
`;

const TextContainer1 = styled.p`
  background: none;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0 0 30px" : "0 10% 30px")};
`;

const StyledImage1 = styled(Image)`
  object-fit: contain;
  background: none;
  object-position: 50% 0;
  height: 100%;
  float: right;
  box-shadow: 0 0 3vh grey;
  margin: ${(props) => (props.$isOnMobile ? "0 0 15%" : "0 0 10px 20px")};
  width: ${(props) => (props.$isOnMobile ? "100%" : "40%")};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--secondary);
  &:hover {
    color: var(--accent);
  }
  transition: all 0.2s;
`;

const TextContainer2 = styled.p`
  background: none;
  > * {
    background: none;
  }
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
  margin-bottom: 45px;
`;

const StyledImage2 = styled(Image)`
  object-fit: ${(props) => (props.$isOnMobile ? "cover" : "contain")};
  background: none;
  object-position: 50% 0;
  width: 100%;
  box-shadow: 0 0 3vh grey;
  height: ${(props) => (props.$isOnMobile ? "35vh" : "100%")};
`;
