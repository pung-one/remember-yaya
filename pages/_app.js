import GlobalStyle from "@/styles/styles.js";
import Layout from "@/components/Layout";
import Head from "next/head";
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
      <Head>
        <title>Remember Yaya</title>
        <meta
          name="description"
          content="This website informs about the activity of the 'Initiative in Remembrance of Yaya Jabbi'."
        />
      </Head>
      <Layout language={language} onToggleLanguage={handleToggleLanguage}>
        <Component {...pageProps} language={language} />
      </Layout>
    </>
  );
}
