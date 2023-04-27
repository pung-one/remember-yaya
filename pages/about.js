import styled from "styled-components";

export default function Home({ language }) {
  return (
    <PageContainer>
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
    </PageContainer>
  );
}

const PageContainer = styled.main`
  max-width: 1100px;
  padding: 15vh 10vw 10vh;
  margin: 0 auto 0;
`;

const Title = styled.h2`
  margin-bottom: 3vh;
`;

const Article = styled.article`
  line-height: 25px;
`;
