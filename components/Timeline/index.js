import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Timeline({ timeLineDates }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    if (typeof window !== "undefined") {
      let currentPosition = window.scrollY;
      let clientHeightOnePercent =
        (document.body.clientHeight - window.innerHeight) / 100;
      setScrollPosition(currentPosition / clientHeightOnePercent + "%");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollPosition]);

  return (
    <TimelineContainer>
      <ProgressBar scrollPosition={scrollPosition} />
      {timeLineDates?.map(({ slug, date }) => {
        return (
          <DateOnTimeLine key={slug} href={`#${slug}`}>
            {date}
          </DateOnTimeLine>
        );
      })}
    </TimelineContainer>
  );
}

const TimelineContainer = styled.aside.attrs((props) => ({
  scroll: props.scrollPosition,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10% 0 10%;
  padding-right: 15%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    top: 0;
    right: 10%;
    background-color: var(--primary-accent);
    opacity: 0.3;
  }
`;

const ProgressBar = styled.div.attrs((props) => ({
  style: {
    height: props.scrollPosition,
  },
}))`
  position: absolute;
  width: 5px;
  top: 0;
  right: 10%;
  background-color: var(--primary-accent);
  opacity: 1;
`;

const DateOnTimeLine = styled.a`
  position: relative;
  background: none;
  font-size: 16px;
  color: var(--primary-accent);
  opacity: 0.6;
  &:hover {
    color: white;
  }
`;
