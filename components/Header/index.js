import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link";
import { SlMenu, SlClose } from "react-icons/sl";
import DesktopNavBar from "../DesktopNavBar";

export default function Header({
  showHeader,
  language,
  onToggleLanguage,
  onToggleNav,
  showNav,
  viewportHeight,
  viewportWidth,
}) {
  return (
    <HeaderContainer
      showHeader={showHeader}
      isOnMobile={viewportHeight > viewportWidth}
    >
      <StyledLink href={"/"}>
        <Headline>Remember Yaya</Headline>
      </StyledLink>
      {viewportHeight < viewportWidth && <DesktopNavBar />}
      <ToggleButtonContainer>
        <LanguageButton
          aria-label="switch between english and german language"
          onClick={() => onToggleLanguage()}
        >
          <LangSign isActive={language === "english"}>ENG</LangSign>{" "}
          <LangSign isActive={language === "german"}>DEU</LangSign>
        </LanguageButton>
        {viewportHeight > viewportWidth && (
          <MenuButton
            aria-label="open and close menu"
            onClick={() => onToggleNav()}
          >
            <MenuButtonSymbol $showNav={showNav} />
            <CloseMenuSymbol $showNav={showNav} />
          </MenuButton>
        )}
      </ToggleButtonContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: ${({ showHeader, isOnMobile }) =>
    !showHeader && isOnMobile ? "-10vh" : "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-bottom: 1px solid black;
  background-color: black;
  width: 100%;
  height: 10vh;
  transition: top 0.5s;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 4vw;
  background-color: black;
`;

const Headline = styled.p`
  font-family: var(--headline-font);
  font-size: 3vh;
  background-color: black;
  color: var(--accent);
`;

const ToggleButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
  right: 4vw;
  background-color: black;
`;

const LanguageButton = styled.button`
  padding: 3px;
  background-color: black;
  border: none;
`;

const LangSign = styled.span`
  font-family: var(--headline-font);
  font-size: 2vh;
  background-color: black;
  color: var(--secondary);
  opacity: ${({ isActive }) => (isActive ? "0.5" : "1")};
  ${({ isActive }) =>
    !isActive
      ? css`
          &:hover {
            cursor: pointer;
            color: var(--accent);
          }
        `
      : ""}
  transition: all 0.2s;
`;

const MenuButton = styled.button`
  position: relative;
  overflow: hidden;
  width: 3.5vh;
  height: 3.5vh;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const MenuButtonSymbol = styled(SlMenu)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$showNav ? "0" : "1")};
  transform: ${(props) => (props.$showNav ? "rotate(-90deg)" : "")};
  background-color: black;
  font-size: 3.5vh;
  transition: all 0.3s;
  fill: var(--accent);
`;

const CloseMenuSymbol = styled(SlClose)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$showNav ? "1" : "0")};
  transform: ${(props) => (props.$showNav ? "" : "rotate(90deg)")};
  background-color: black;
  font-size: 3.5vh;
  transition: all 0.3s;
  fill: var(--accent);
`;
