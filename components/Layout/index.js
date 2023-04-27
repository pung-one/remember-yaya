import Header from "../Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MobileNavBar from "../MobileNavBar";

export default function Layout({ children, language, onToggleLanguage }) {
  const [showNav, setShowNav] = useState(false);
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");

  const router = useRouter();
  const route = router.route;

  function handleToggleNav() {
    setShowNav(!showNav);
  }

  function handleResize() {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }

  useEffect(() => {
    setShowNav(false);
  }, [route]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <LayoutContainer>
      <Header
        language={language}
        onToggleLanguage={onToggleLanguage}
        onToggleNav={handleToggleNav}
        showNav={showNav}
      />
      {viewportHeight > viewportWidth && <MobileNavBar showNav={showNav} />}
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.section`
  position: relative;
  height: 100%;
  overflow-x: hidden;
`;
