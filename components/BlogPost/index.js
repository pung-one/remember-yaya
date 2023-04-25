import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ title, date, imagesrc, article }) {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Date>{date}</Date>
      {imagesrc && (
        <ImageContainer>
          <StyledImage src={imagesrc} alt={title} fill={true} />
        </ImageContainer>
      )}
      <Article dangerouslySetInnerHTML={{ __html: article }} />
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
  object-fit: contain;
`;
