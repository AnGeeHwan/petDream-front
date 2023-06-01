"use client";

import styled from "styled-components";
import MyPageHeader from "./myPageHeader";
import MyPageBody from "./myPageBody";
import MyPageFooter from "./myPageFooter";

export default function MyPage() {
  return (
    <FullContainer>
      <MyPageHeader />
      <ContentDiv>
        <MyPageBody />
      </ContentDiv>
      <MyPageFooter />
    </FullContainer>
  );
}
const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-bottom: 316px;
`;
const FullContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
