import GlobalStyle from "@/styles/styles.js";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("english");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");

  function handleToggleLanguage() {
    if (language === "english") {
      setLanguage("german");
    } else if (language === "german") {
      setLanguage("english");
    }
  }

  function handleScroll() {
    if (typeof window !== "undefined") {
      let currentPosition = window.scrollY;
      let clientHeightOnePercent =
        (document.body.clientHeight - window.innerHeight) / 100;
      setScrollPosition(currentPosition / clientHeightOnePercent + "%");
      if (window.scrollY > lastScrollY && window.scrollY > 70) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  }

  function handleResize() {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollPosition, lastScrollY]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Remember Yaya Jabbi</title>
        <link rel="icon" href="/favicon/raise-hand.ico" />
        <meta
          name="description"
          content="This website informs about the activity of the 'Initiative in Remembrance of Yaya Jabbi'."
          key="desc"
        />
        <meta property="og:title" content="Remember Yaya Jabbi" />
        <meta
          property="og:description"
          content="This website informs about the activity of the 'Initiative in Remembrance of Yaya Jabbi'."
        />
        <meta
          property="og:image"
          content="https://www.rememberyaya.org/_next/image?url=%2Fimages%2FYaya_Jabbi.jpg&w=1920&q=75"
        />
      </Head>
      <Layout
        viewportHeight={viewportHeight}
        viewportWidth={viewportWidth}
        showHeader={showHeader}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      >
        <Component
          viewportHeight={viewportHeight}
          viewportWidth={viewportWidth}
          {...pageProps}
          language={language}
          scrollPosition={scrollPosition}
        />
      </Layout>
    </>
  );
}
