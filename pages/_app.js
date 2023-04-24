import GlobalStyle from "@/styles/styles.js";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("english");

  function handleToggleLanguage() {
    if (language === "english") {
      setLanguage("german");
    } else if (language === "german") {
      setLanguage("english");
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout language={language} onToggleLanguage={handleToggleLanguage}>
        <Component {...pageProps} language={language} />
      </Layout>
    </>
  );
}
