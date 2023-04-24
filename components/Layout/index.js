import Header from "../Header";

export default function Layout({ children, language, onToggleLanguage }) {
  return (
    <>
      <Header language={language} onToggleLanguage={onToggleLanguage} />
      {children}
    </>
  );
}
