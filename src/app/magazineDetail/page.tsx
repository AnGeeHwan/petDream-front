"use client";

import styled from "styled-components";
import DetailBody from "./detailBody";
import DetailFooter from "./detailFooter";
import DetailHeader from "./detailHeader";

export default function MagazineDetail() {
  return (
    <FullContainer>
      <DetailHeader />
      <ContentDiv>
        <DetailBody />
      </ContentDiv>
      <DetailFooter />
    </FullContainer>
  );
}

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FullContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 1920px;

  @media screen and (max-width: 1024px) {
    width: 1024px;
  }

  @media screen and (max-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`;
