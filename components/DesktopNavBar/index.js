import styled from "styled-components";
import Link from "next/link";

export default function DesktopNavBar() {
  return (
    <NavContainer>
      <List>
        <ListElement>
          <StyledLink href={"/"}>Chronic</StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink href={"/about"}>About</StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink href={"/circle"}>Yaya Jabbi Circle</StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink href={"/contact"}>Contact</StyledLink>
        </ListElement>
      </List>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: relative;
  margin: 0 auto 0 auto;
  background-color: black;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3vw;
  background-color: black;
`;

const ListElement = styled.li`
  background-color: black;
`;

const StyledLink = styled(Link)`
  position: relative;
  background-color: black;
  color: var(--secondary);
  font-family: var(--headline-font);
  font-size: 2vh;
  &:hover {
    color: var(--accent);
  }
  transition: all 0.2s;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: bottom left;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
