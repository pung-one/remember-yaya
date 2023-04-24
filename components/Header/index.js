import styled from "styled-components";

export default function Header({ language, onToggleLanguage }) {
  console.log(language);
  return (
    <HeaderContainer>
      <Headline>Remember Yaya</Headline>
      <LanguageButton onClick={() => onToggleLanguage()}>
        <LangSign isActive={language === "english"}>ENG</LangSign>/
        <LangSign isActive={language === "german"}>DEU</LangSign>
      </LanguageButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  z-index: 2;
  border-bottom: 1px solid black;
  background-color: white;
  width: 100%;
  height: 10vh;
`;

const Headline = styled.h1`
  margin: auto 0 auto 4vw;
`;

const LanguageButton = styled.button`
  position: absolute;
  right: 3vw;
  align-self: center;
  margin: auto 0 auto;
  padding: 3px;
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const LangSign = styled.span`
  opacity: ${({ isActive }) => (isActive ? "0.5" : "1")};
`;
