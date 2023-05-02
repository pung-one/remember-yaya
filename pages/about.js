import styled from "styled-components";
import Image from "next/image";

export default function About({ language }) {
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle>About</PageTitle>
      </HeroSection>
      <Title>
        {language === "english"
          ? "Initiative in Remembrance of Yaya Jabbi"
          : "Initiative in Gedenken an Yaya Jabbi"}
      </Title>
      <Article>
        {language === "english"
          ? "The Initiative in Remembrance of Yaya Jabbi is standing up for a clearing of all the circumstances of his death and wants an active remembrance, public notice and recognition of his death. Also the Initiative wants to reach attention and rethinking of the politics of “war on drugs”, that were responsible for Yaya Jabbi arrest in the first place. Demands are an end of the so-called “task force” in Hamburg, a stop of the racial controls and a perspective, solidarity and support beyond drug labour. In the Initiative are friends and family of Yaya Jabbi, as well as activists from different antiracist and antifascist contexts."
          : "Die Initiative in Gedenken an Yaya Jabbi setzt sich für eine lückenlose Aufklärung der Umstände seines Todes ein und fordert aktives Erinnern, öffentliche Wahrnehmung und Anerkennung des Todes von Yaya Jabbi ein. Außerdem soll eine Aufmerksamkeit und ein Umdenken der aktuellen Politik des „Kriegs gegen Drogen“ erreicht werden, die überhaupt zur Festnahme Yaya Jabbis geführt hat. Gefordert wird unter anderem ein Ende der sogenannten „Task Force“ in Hamburg, ein Stop der rassistischen Polizeikontrollen und ein Weiterdenken im Hinblick auf die Solidarität und Unterstützung mit Menschen in Drogenarbeit. Die Initiative setzt sich zusammen aus Freunden und Familie von Yaya Jabbi und Aktivist_innen aus verschiedenen antirassistischen und antifaschistischen Zusammenhängen."}
      </Article>
      <ImageContainer>
        <StyledImage src={"/images/Banner_2.jpg"} alt={"banner"} fill={true} />
      </ImageContainer>
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
  z-index: 2;
  line-height: 25px;
  padding: 0 10vw 5vh;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 0 50%;
`;
