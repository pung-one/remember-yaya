import BlogPost from "@/components/BlogPost";
import oldPosts from "../public/oldPosts";
import styled from "styled-components";
import { css } from "styled-components";
import { useState, useEffect } from "react";
import Timeline from "@/components/Timeline";

export default function Home({ language, scrollPosition }) {
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");
  const [timeLineDates, setTimeLineDates] = useState([]);

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

  useEffect(() => {
    setTimeLineDates(
      oldPosts.map((post) => {
        if (language === "english") {
          return { date: post.engDate, slug: post.slug };
        }
        return { date: post.gerDate, slug: post.slug };
      })
    );
  }, [oldPosts, language]);

  return (
    <>
      <TitleTimelineContainer isOnMobile={viewportHeight > viewportWidth}>
        <PageTitle>Chronic</PageTitle>
        {viewportHeight < viewportWidth && (
          <Timeline
            timeLineDates={timeLineDates}
            scrollPosition={scrollPosition}
          />
        )}
      </TitleTimelineContainer>
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

const TitleTimelineContainer = styled.aside`
  ${({ isOnMobile }) =>
    isOnMobile
      ? css`
          position: relative;
          margin: 15vh 0 0;
          > h1 {
            font-size: 7vh;
          }
        `
      : css`
          position: fixed;
          display: flex;
          flex-direction: column;
          height: 87vh;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageTitle = styled.h1`
  z-index: 0;
  display: flex;
  justify-content: center;
  font-weight: lighter;
`;

const PageContainer = styled.main`
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "10vh auto 0 auto")};
`;
