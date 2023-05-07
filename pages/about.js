import styled from "styled-components";
import { css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About({ language }) {
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
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>About</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <Title>
          {language === "english"
            ? "Initiative in Remembrance of Yaya Jabbi"
            : "Initiative in Gedenken an Yaya Jabbi"}
        </Title>
        <Article>
          {language === "english"
            ? "The Initiative in Remembrance of Yaya Jabbi is standing up for a clearing of all the circumstances of his death and wants an active remembrance, public notice and recognition of his death. Also the Initiative wants to reach attention and rethinking of the politics of “war on drugs”, that were responsible for Yaya Jabbi arrest in the first place. Demands are an end of the so-called “task force” in Hamburg, a stop of the racist controls and a perspective, solidarity and support beyond drug labour. In the Initiative are friends and family of Yaya Jabbi, as well as activists from different antiracist and antifascist contexts."
            : "Die Initiative in Gedenken an Yaya Jabbi setzt sich für eine lückenlose Aufklärung der Umstände seines Todes ein und fordert aktives Erinnern, öffentliche Wahrnehmung und Anerkennung des Todes von Yaya Jabbi ein. Außerdem soll eine Aufmerksamkeit und ein Umdenken der aktuellen Politik des „Kriegs gegen Drogen“ erreicht werden, die überhaupt zur Festnahme Yaya Jabbis geführt hat. Gefordert wird unter anderem ein Ende der sogenannten „Task Force“ in Hamburg, ein Stop der rassistischen Polizeikontrollen und ein Weiterdenken im Hinblick auf die Solidarität und Unterstützung mit Menschen in Drogenarbeit. Die Initiative setzt sich zusammen aus Freunden und Familie von Yaya Jabbi und Aktivist_innen aus verschiedenen antirassistischen und antifaschistischen Zusammenhängen."}
        </Article>
        <StyledImage
          src={"/images/Banner_2.jpg"}
          alt={"banner"}
          width={"959"}
          height={"367"}
        />
      </PageContainer>
    </>
  );
}

const PageContainer = styled.main`
  position: relative;
  background: none;
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "30vh auto 0 auto")};
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
          font-size: 15vw;
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

const Article = styled.article`
  z-index: 2;
  background: none;
  line-height: 25px;
  padding: 0 10vw 4vw;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 4vh 0;
  object-position: 50% 0;
`;
