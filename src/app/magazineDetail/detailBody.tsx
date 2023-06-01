"use client";

import Card from "@/components/magazine/card";
import Comment from "@/components/magazine/comment";
import styled from "styled-components";

export default function DetailBody() {
  return (
    <BodyContainer>
      <ContentContainer>
        대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계
        국무위원이 부서한다. 군사에 관한 것도 또한 같다. 국회에서 의결된
        법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 국가는 농지에
        관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의
        소작제도는 금지된다. 대통령은 법률안의 일부에 대하여 또는 법률안을
        수정하여 재의를 요구할 수 없다. 이 헌법시행 당시의 대법원장과
        대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여
        임명된 것으로 본다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을
        경과함으로써 효력을 발생한다. 모든 국민은 건강하고 쾌적한 환경에서
        생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다.
        <CommentContainer>
          <Comment></Comment>
        </CommentContainer>
        <RecommandContainer>
          <RecommandTitle>추천 게시물</RecommandTitle>
          <CardRowContainer>
            <Card
              src={"123"}
              mainTitle="제주도에서 반려동물과 추천 여행지."
              subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
              width="25%"
            />
            <Card
              src={"123"}
              mainTitle="제주도에서 반려동물과 추천 여행지."
              subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
              width="25%"
            />
            <Card
              src={"123"}
              mainTitle="제주도에서 반려동물과 추천 여행지."
              subTitle="반려동물과 떠나는 제주여행 갈곳이 고민이라면?"
              width="25%"
            />
          </CardRowContainer>
        </RecommandContainer>
      </ContentContainer>
    </BodyContainer>
  );
}

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  padding-top: 100px;
`;

const CardRowContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
`;

const RecommandTitle = styled.div`
  /* h5-bold-700-28px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  /* black */

  color: #000000;
`;

const RecommandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  padding-top: 100px;
`;

const ContentContainer = styled.div`
  color: black;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 120px;
  width: 50%;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  top: 227px;
  align-items: center;
`;
