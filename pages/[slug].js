import BlogPost from "@/components/BlogPost";
import oldPosts from "../public/oldPosts";
import styled from "styled-components";
import { css } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PostDetail({ language }) {
  const router = useRouter();
  const { slug } = router.query;
  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");
  const [currentPost, setCurrentPost] = useState({});

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
    setCurrentPost(oldPosts.find((post) => post.slug === slug));
  }, [oldPosts, slug]);

  if (!currentPost) return <h1>Loading...</h1>;

  const {
    engTitle,
    gerTitle,
    engDate,
    gerDate,
    engArticle,
    gerArticle,
    imagesrc,
    youtubeLink,
  } = currentPost;

  return (
    <>
      <PageTitle isOnMobile={viewportHeight > viewportWidth}>
        {language === "english" ? engDate : gerDate}
      </PageTitle>
      <PageContainer isOnMobile={viewportHeight > viewportWidth}>
        <BlogPost
          isDetailPost={true}
          key={engTitle}
          title={language === "english" ? engTitle : gerTitle}
          article={language === "english" ? engArticle : gerArticle}
          imagesrc={imagesrc}
          youtubeLink={youtubeLink}
        />
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
          text-align: center;
          font-size: 10vh;
          margin: 15vh 10vw 0;
        `
      : css`
          position: fixed;
          font-size: 6vw;
          right: 0;
          margin: 13vh 4vw 0 0;
        `}
`;

const PageContainer = styled.main`
  max-width: 1100px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "5vh 0" : "25vh auto 0 auto")};
`;
