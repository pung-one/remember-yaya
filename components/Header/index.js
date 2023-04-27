import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SlMenu, SlClose } from "react-icons/sl";
import DesktopNavBar from "../DesktopNavBar";

export default function Header({
  language,
  onToggleLanguage,
  onToggleNav,
  showNav,
}) {
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
    <HeaderContainer>
      <StyledLink href={"/"}>
        <Headline>Remember Yaya</Headline>
      </StyledLink>
      {viewportHeight < viewportWidth && <DesktopNavBar />}
      <LanguageButton onClick={() => onToggleLanguage()}>
        <LangSign isActive={language === "english"}>ENG</LangSign>{" "}
        <LangSign isActive={language === "german"}>DEU</LangSign>
      </LanguageButton>
      {viewportHeight > viewportWidth && (
        <MenuButton onClick={() => onToggleNav()}>
          <MenuButtonSymbol $showNav={showNav} />
          <CloseMenuSymbol $showNav={showNav} />
        </MenuButton>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  border-bottom: 1px solid black;
  background-color: black;
  width: 100%;
  height: 10vh;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 4vw;
  background-color: black;
`;

const Headline = styled.p`
  font-size: 3vh;
  background-color: black;
  color: #f15a30;
`;

const LanguageButton = styled.button`
  padding: 3px;
  margin-right: 5vw;
  background-color: black;
  border: none;
`;

const LangSign = styled.span`
  font-size: 2vh;
  background-color: black;
  color: #00b49b;
  opacity: ${({ isActive }) => (isActive ? "0.5" : "1")};
  ${({ isActive }) =>
    !isActive
      ? css`
          &:hover {
            cursor: pointer;
            color: white;
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
  margin-right: 5vw;
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
  fill: white;
  transition: all 0.5s;
`;

const CloseMenuSymbol = styled(SlClose)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$showNav ? "1" : "0")};
  transform: ${(props) => (props.$showNav ? "" : "rotate(90deg)")};
  background-color: black;
  font-size: 3.5vh;
  fill: white;
  transition: all 0.5s;
`;
