import Header from "../Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MobileNavBar from "../MobileNavBar";

export default function Layout({
  children,
  language,
  onToggleLanguage,
  showHeader,
  viewportHeight,
  viewportWidth,
}) {
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();
  const route = router.route;

  function handleToggleNav() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    setShowNav(false);
  }, [route]);

  return (
    <LayoutContainer>
      <Header
        viewportHeight={viewportHeight}
        viewportWidth={viewportWidth}
        showHeader={showHeader}
        language={language}
        onToggleLanguage={onToggleLanguage}
        onToggleNav={handleToggleNav}
        showNav={showNav}
      />
      {viewportHeight > viewportWidth && (
        <>
          {showNav && <CloseOnClickArea onClick={() => setShowNav(!showNav)} />}
          <MobileNavBar showNav={showNav} />
        </>
      )}
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.section`
  background: none;
  position: relative;
  height: 100%;
  overflow-x: hidden;
`;

const CloseOnClickArea = styled.section`
  position: fixed;
  top: 10vh;
  width: 38vw;
  height: 90vh;
  z-index: 1;
  background: none;
`;
