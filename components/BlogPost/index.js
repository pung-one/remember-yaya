import styled from "styled-components";
import Image from "next/image";

export default function BlogPost({ title, date, imagesrc, article }) {
  return (
    <>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <StyledImage src={imagesrc} alt={title} width={200} height={150} />
      <Article>{article}</Article>
    </>
  );
}

const Title = styled.title``;

const Date = styled.span``;

const Article = styled.article``;

const StyledImage = styled(Image)``;
