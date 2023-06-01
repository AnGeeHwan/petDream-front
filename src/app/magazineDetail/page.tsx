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
`;
