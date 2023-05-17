import styled from "styled-components";
import Link from "next/link";
export default function MobileNavBar({ showNav }) {
  return (
    <NavContainer showNav={showNav}>
      <List>
        <ListElement>
          <StyledLink aria-label="got to chronic-page" href={"/"}>
            Chronic
          </StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink aria-label="got to about-page" href={"/about"}>
            About
          </StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink aria-label="got to circle-page" href={"/circle"}>
            Yaya Jabbi Circle
          </StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink aria-label="got to contact-page" href={"/contact"}>
            Contact
          </StyledLink>
        </ListElement>
      </List>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 10vh;
  padding-top: 5vh;
  z-index: 2;
  height: 100%;
  opacity: 0.85;
  background-color: black;
  right: ${({ showNav }) => (showNav ? "0" : "-100vw")};
  transition: all 0.5s ease-in-out;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 62vw;
  gap: 4vh;
  background-color: black;
`;

const ListElement = styled.li`
  background-color: black;
`;

const StyledLink = styled(Link)`
  background-color: black;
  font-size: 2.2vh;
  font-family: var(--headline-font);
  color: var(--secondary);
`;
