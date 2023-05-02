import styled from "styled-components";
import Link from "next/link";
export default function MobileNavBar({ showNav }) {
  return (
    <NavContainer showNav={showNav}>
      <List>
        <ListElement>
          <StyledLink href={"/"}>Home</StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink href={"/about"}>About</StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink href={"/circle"}>Yaya Jabbi Circle</StyledLink>
        </ListElement>
      </List>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 10vh;
  padding-top: 5vh;
  z-index: 2;
  height: 100%;
  opacity: 0.8;
  background-color: black;
  right: ${({ showNav }) => (showNav ? "0" : "-50vw")};
  transition: all 0.5s;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 50vw;
  gap: 3vh;
  background-color: black;
`;

const ListElement = styled.li`
  background-color: black;
`;

const StyledLink = styled(Link)`
  background-color: black;
  font-size: 2.2vh;
  color: #00b49b;
`;
