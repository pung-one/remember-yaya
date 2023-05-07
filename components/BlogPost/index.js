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
    </PostContainer>
  );
}

const PostContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding-bottom: 10vh;
  margin: 0 10vw 10vh;
  gap: 3vh;
  background: none;
  > * {
    background: none;
  }
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
  a {
    text-decoration: underline;
    color: #00b49b;
    &:hover {
      color: white;
    }
    transition: all 0.2s;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 40vh;
  margin-bottom: 4vh;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  background: none;
  height: 35vh;
  width: 100%;
  object-position: 50% 50%;
`;
