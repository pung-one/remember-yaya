import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Headline>Remember Yaya</Headline>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid black;
  width: 100%;
  height: 10vh;
`;

const Headline = styled.h1`
  margin: auto 0 auto 4vw;
`;
