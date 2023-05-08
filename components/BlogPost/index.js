import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlogPost({
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
    <PostContainer>
      <Title
        dateIsShownOutside={
          viewportWidth > 1200 && viewportHeight < viewportWidth
        }
      >
        {title}
      </Title>
      <Date
        showOutsideOfBox={
          viewportWidth > 1200 && viewportHeight < viewportWidth
        }
      >
        {date}
      </Date>
      {youtubeLink ? (
        <>
          <YoutubeContainer>
            <StyledIframe
              src="https://www.youtube.com/embed/WsTrfJTC9Ms"
              allowFullScreen
              title="The Life of Yaya Jabbi"
            />
          </YoutubeContainer>
          <Article dangerouslySetInnerHTML={{ __html: article }} />
          {imagesrc && (
            <StyledImage
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
              src={imagesrc}
              alt={title}
              width={"800"}
              height={"600"}
            />
          )}
          <Article dangerouslySetInnerHTML={{ __html: article }} />
        </>
      )}
      <FinishLine />
    </PostContainer>
  );
}

const PostContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: 0 10vw 10vh;
  gap: 30px;
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
  margin: 0 2vw;
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
  margin: 0 2vw;
  a {
    text-decoration: underline;
    color: #00b49b;
    &:hover {
      color: white;
    }
    transition: all 0.2s;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  background: none;
  height: 35vh;
  width: 100%;
  object-position: 50% 50%;
`;
