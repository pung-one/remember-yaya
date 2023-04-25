import styled from "styled-components";
import Image from "next/image";

export default function BlogPost({
  title,
  date,
  imagesrc,
  article,
  youtubeLink,
}) {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Date>{date}</Date>
      {youtubeLink ? (
        <>
          <YoutubeContainer>
            <StyledIframe
              src="https://www.youtube.com/embed/WsTrfJTC9Ms"
              allowFullScreen
              title="The Life of Yaya Jabbi"
            />
          </YoutubeContainer>
          {/* <YouTube videoId={youtubeLink} /> */}
          <Article dangerouslySetInnerHTML={{ __html: article }} />
          {imagesrc && (
            <ImageContainer>
              <StyledImage src={imagesrc} alt={title} fill={true} />
            </ImageContainer>
          )}
        </>
      ) : (
        <>
          {imagesrc && (
            <ImageContainer>
              <StyledImage src={imagesrc} alt={title} fill={true} />
            </ImageContainer>
          )}
          <Article dangerouslySetInnerHTML={{ __html: article }} />
        </>
      )}
    </PostContainer>
  );
}

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding-bottom: 10vh;
  margin: 0 10vw 10vh;
  gap: 2vh;
`;

const Title = styled.h2``;

const Date = styled.span`
  opacity: 0.7;
`;

const YoutubeContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Article = styled.article`
  line-height: 25px;
  a {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 40vh;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 0 50%;
`;
