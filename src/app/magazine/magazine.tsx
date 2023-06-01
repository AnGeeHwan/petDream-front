"use client";

import Card from "@/components/magazine/card";
import styled from "styled-components";

export default function Magazine() {
  return (
    <Container>
      <MainDiv>
        <CardRowContainer>
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
        </CardRowContainer>
        <CardRowContainer>
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
        </CardRowContainer>
        <CardRowContainer>
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
          <Card
            src={"123"}
            mainTitle="제주도에서 반려동물과 추천 여행지."
            subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
          />
        </CardRowContainer>
      </MainDiv>
    </Container>
  );
}

const CardRowContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Container = styled.div`
  display: flex;

  width: 100%;

  left: 0px;
  top: 0px;

  padding-top: 56px;

  flex-direction: column;
  justify-content: center;
  background: white;
  color: black;

  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
