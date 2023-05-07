import BlogPost from "@/components/BlogPost";
import oldPosts from "../public/oldPosts";
import styled from "styled-components";
import { css } from "styled-components";
import { useState, useEffect } from "react";

export default function Home({ language }) {
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");

  function handleResize() {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }

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
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>Chronic</PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        {oldPosts?.map(
          ({
            engTitle,
            gerTitle,
            engDate,
            gerDate,
            engArticle,
            gerArticle,
            imagesrc,
            youtubeLink,
          }) => {
            return (
              <BlogPost
                key={engTitle}
                title={language === "english" ? engTitle : gerTitle}
                date={language === "english" ? engDate : gerDate}
                article={language === "english" ? engArticle : gerArticle}
                imagesrc={imagesrc}
                youtubeLink={youtubeLink}
              />
            );
          }
        )}
      </PageContainer>
    </>
  );
}

const PageTitle = styled.h1`
  z-index: 0;
  display: flex;
  justify-content: center;
  font-weight: lighter;
  color: #a2b0ad;
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          position: relative;
          font-size: 10vh;
          margin: 15vh 0 0;
        `
      : css`
          position: fixed;
          font-size: 10vw;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageContainer = styled.main`
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "30vh auto 0 auto")};
`;
