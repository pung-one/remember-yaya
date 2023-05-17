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
            slug,
            engTitle,
            gerTitle,
            engDate,
            gerDate,
            engArticle,
            gerArticle,
            imagesrc,
            imageAlt,
            youtubeLink,
          }) => {
            return (
              <BlogPost
                slug={slug}
                key={engTitle}
                title={language === "english" ? engTitle : gerTitle}
                date={language === "english" ? engDate : gerDate}
                article={language === "english" ? engArticle : gerArticle}
                imagesrc={imagesrc}
                imageAlt={imageAlt}
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
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          position: relative;
          font-size: 7vh;
          margin: 15vh 0 0;
        `
      : css`
          position: fixed;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageContainer = styled.main`
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "25vh auto 0 auto")};
`;
