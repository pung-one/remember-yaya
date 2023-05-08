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
  background-color: black;
  color: #00b49b;
  font-size: 2vh;
  &:hover {
    color: white;
  }
  transition: all 0.2s;
`;
