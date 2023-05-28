import styled from "styled-components";

export default function PageContainer({ isOnMobile, children }) {
  return <Page isOnMobile={isOnMobile}>{children}</Page>;
}

const Page = styled.main`
  background: none;
  position: relative;
  max-width: 1100px;
  margin: ${({ isOnMobile }) =>
    isOnMobile ? "5vh 0 10vh" : "25vh auto 10vh auto"};
`;
