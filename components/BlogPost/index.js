import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogPost({
  slug,
  isDetailPost,
  title,
  date,
  imagesrc,
  article,
  youtubeLink,
}) {
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
    <PostContainer isOnMobile={viewportHeight > viewportWidth}>
      {isDetailPost ? (
        <Title
          dateIsShownOutside={
            viewportWidth > 1200 && viewportHeight < viewportWidth
          }
        >
          {title}
        </Title>
      ) : (
        <LinkTitle
          href={`/${slug}`}
          $dateIsShownOutside={
            viewportWidth > 1200 && viewportHeight < viewportWidth
          }
        >
          {title}
        </LinkTitle>
      )}
      {!isDetailPost && (
        <Date
          showOutsideOfBox={
            viewportWidth > 1200 && viewportHeight < viewportWidth
          }
        >
          {date}
        </Date>
      )}
      {youtubeLink ? (
        <>
          <YoutubeContainer isOnMobile={viewportHeight > viewportWidth}>
            <StyledIframe
              src="https://www.youtube.com/embed/WsTrfJTC9Ms"
              allowFullScreen
              title="The Life of Yaya Jabbi"
            />
          </YoutubeContainer>
          <Article
            isOnMobile={viewportHeight > viewportWidth}
            dangerouslySetInnerHTML={{ __html: article }}
          />
          {imagesrc && (
            <StyledImage
              $isOnMobile={viewportHeight > viewportWidth}
              src={imagesrc}
              alt={title}
              width={"800"}
              height={"600"}
            />
          )}
        </>
      ) : (
        <>
          {imagesrc && (
            <StyledImage
              $isOnMobile={viewportHeight > viewportWidth}
              src={imagesrc}
              alt={title}
              width={"800"}
              height={"600"}
            />
          )}
          <Article
            isOnMobile={viewportHeight > viewportWidth}
            dangerouslySetInnerHTML={{ __html: article }}
          />
        </>
      )}
      {!isDetailPost && <FinishLine />}
    </PostContainer>
  );
}

const PostContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: ${({ isOnMobile }) =>
    isOnMobile ? "0 10vw 10vh" : "0 20vw 20vh 5vw"};
  gap: 40px;
  background: none;
  > * {
    background: none;
  }
`;

const FinishLine = styled.div`
  position: absolute;
  left: -50vw;
  bottom: 0;
  border-bottom: 1px solid black;
  height: 1px;
  width: 150vw;
`;

const LinkTitle = styled(Link)`
  width: fit-content;
  background: none;
  text-decoration: underline;
  font-family: var(--headline-font);
  font-size: 32px;
  font-weight: lighter;
  margin-bottom: ${(props) => (props.$dateIsShownOutside ? "3vh" : "")};
  &:hover {
    color: white;
  }
  transition: all 0.2s;
`;

const Title = styled.h2`
  background: none;
  margin-bottom: ${({ dateIsShownOutside }) =>
    dateIsShownOutside ? "3vh" : ""};
`;

const Date = styled.span`
  background: none;
  font-size: 14px;
  position: ${({ showOutsideOfBox }) =>
    showOutsideOfBox ? "absolute" : "relative"};
  left: ${({ showOutsideOfBox }) => (showOutsideOfBox ? "-12vw" : "")};
  opacity: 0.7;
`;

const YoutubeContainer = styled.section`
  position: relative;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Article = styled.article`
  > * {
    background: none;
  }
  line-height: 32px;
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 5%")};
  height: 100%;
  a {
    text-decoration: underline;
    color: var(--secondary);
    &:hover {
      color: black;
    }
    transition: all 0.2s;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  background: none;
  height: 100%;
  width: ${(props) => (props.$isOnMobile ? "100%" : "90%")};
  align-self: center;
  object-position: 50% 0;
`;
