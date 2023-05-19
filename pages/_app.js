import GlobalStyle from "@/styles/styles.js";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("english");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollPosition, lastScrollY]);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Remember Yaya</title>
        <meta
          name="description"
          content="This website informs about the activity of the 'Initiative in Remembrance of Yaya Jabbi'."
        />
      </Head>
      <Layout
        showHeader={showHeader}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      >
        <Component
          {...pageProps}
          language={language}
          scrollPosition={scrollPosition}
        />
      </Layout>
    </>
  );
}
