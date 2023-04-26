import BlogPost from "@/components/BlogPost";
import oldPosts from "../public/oldPosts";
import styled from "styled-components";

export default function Home({ language }) {
  return (
    <PageContainer>
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

const PageContainer = styled.main`
  max-width: 1200px;
  padding: 15vh 0 5vh;
  margin: 0 auto 0 auto;
`;
