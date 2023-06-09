import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({
  slug,
  isDetailPost,
  title,
  date,
  imagesrc,
  imageAlt,
  article,
  youtubeLink,
  viewportHeight,
  viewportWidth,
}) {
  return (
    <PostContainer id={slug} isOnMobile={viewportHeight > viewportWidth}>
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
              src={`https://www.youtube.com/embed/${youtubeLink}`}
              allowFullScreen
              title={title}
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
              alt={imageAlt}
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
              alt={imageAlt}
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
    </PostContainer>
  );
}

const PostContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ isOnMobile }) => (isOnMobile ? "0 0 10vh" : "15vh 0 0")};
  margin: ${({ isOnMobile }) =>
    isOnMobile ? "0 10vw 10vh" : "0 10vw 10vh 2.5vw"};
  gap: 40px;
  background: none;
  > * {
    background: none;
  }
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
    color: var(--accent);
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
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
  padding-bottom: 56.25%;
  overflow: hidden;
  box-shadow: 0 0 3vh grey;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
`;

const Article = styled.article`
  > * {
    background: none;
  }
  margin: ${({ isOnMobile }) => (isOnMobile ? "0" : "0 10%")};
  height: 100%;
  line-height: 1.8;
  a {
    text-decoration: underline;
    color: var(--secondary);
    &:hover {
      color: var(--accent);
    }
    transition: all 0.2s;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  background: none;
  height: 100%;
  width: ${(props) => (props.$isOnMobile ? "100%" : "80%")};
  align-self: center;
  object-position: 50% 0;
  box-shadow: 0 0 3vh grey;
`;
