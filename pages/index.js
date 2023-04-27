import BlogPost from "@/components/BlogPost";
import oldPosts from "../public/oldPosts";
import styled from "styled-components";

export default function Home({ language }) {
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle>Blog</PageTitle>
      </HeroSection>
      {oldPosts?.map(
        ({ title, date, engArticle, gerArticle, imagesrc, youtubeLink }) => {
          return (
            <BlogPost
              key={title}
              title={title}
              date={date}
              article={language === "english" ? engArticle : gerArticle}
              imagesrc={imagesrc}
              youtubeLink={youtubeLink}
            />
          );
        }
      )}
    </PageContainer>
  );
}

const HeroSection = styled.section`
  margin: 10vh 0 3vh;
  height: 20vh;
`;

const PageTitle = styled.h1`
  position: relative;
  z-index: 0;
  color: #f15a30;
  font-weight: lighter;
  font-style: italic;
`;

const PageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto 0 auto;
`;
