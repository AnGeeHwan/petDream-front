"use client";

import Card from "@/components/magazine/card";
import styled from "styled-components";

export default function MyPageBody() {
  return (
    <BodyContainer>
      <div style={{ top: "-90px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BodyProfileContainer></BodyProfileContainer>
        </div>
        <BodyProfileInfoContainer>
          <ProfileContainer>
            <ProfileNameContainer>nickname</ProfileNameContainer>
            <ProfileIdContainer>@Username</ProfileIdContainer>
            <div style={{ minHeight: "24px" }}></div>
            <ProfileDescriptionContainer>
              자기소개가 없습니다.
            </ProfileDescriptionContainer>
          </ProfileContainer>
        </BodyProfileInfoContainer>
      </div>
      <ProfileBtnContainer>
        <ProfileBtnDiv>
          <span>닉네임 설정</span>
        </ProfileBtnDiv>
        <ProfileBtnDiv>
          <span>설정</span>
        </ProfileBtnDiv>
      </ProfileBtnContainer>
      <BodySubContainer>
        <SubDiv>
          <SubDivTitle>
            <SubTitleDiv>북마크한 매거진</SubTitleDiv>
            <MoreContainer>+더보기</MoreContainer>
          </SubDivTitle>
          <CardRowContainer>
            <Card
              src={`123`}
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
        </SubDiv>
        <SubDiv>
          <SubDivTitle>
            <SubTitleDiv>내가 남긴 댓글</SubTitleDiv>
            <MoreContainer>+더보기</MoreContainer>
          </SubDivTitle>
          <CommentContainer>
            <CommentDiv>
              <CommentSubDiv>
                <CommentInfoDiv>
                  <ProfileImgContainer />
                  <InfoDiv>
                    <InfoMainTitleDiv>
                      <span>제주도에서 반려동물과 추천여행지 {">"}</span>
                    </InfoMainTitleDiv>
                    <InfoSubTitleDiv>
                      <span>우와 </span>
                    </InfoSubTitleDiv>
                  </InfoDiv>
                </CommentInfoDiv>
                <CommentTimeDiv>
                  <span>2023-12-31 23:31</span>
                </CommentTimeDiv>
              </CommentSubDiv>
            </CommentDiv>
            <CommentDiv>
              <CommentSubDiv>
                <CommentInfoDiv>
                  <ProfileImgContainer />
                  <InfoDiv>
                    <InfoMainTitleDiv>
                      <span>제주도에서 반려동물과 추천여행지 {">"}</span>
                    </InfoMainTitleDiv>
                    <InfoSubTitleDiv>
                      <span>우와 </span>
                    </InfoSubTitleDiv>
                  </InfoDiv>
                </CommentInfoDiv>
                <CommentTimeDiv>
                  <span>2023-12-31 23:31</span>
                </CommentTimeDiv>
              </CommentSubDiv>
            </CommentDiv>
            <CommentDiv>
              <CommentSubDiv>
                <CommentInfoDiv>
                  <ProfileImgContainer />
                  <InfoDiv>
                    <InfoMainTitleDiv>
                      <span>제주도에서 반려동물과 추천여행지 {">"}</span>
                    </InfoMainTitleDiv>
                    <InfoSubTitleDiv>
                      <span>우와 </span>
                    </InfoSubTitleDiv>
                  </InfoDiv>
                </CommentInfoDiv>
                <CommentTimeDiv>
                  <span>2023-12-31 23:31</span>
                </CommentTimeDiv>
              </CommentSubDiv>
            </CommentDiv>
            <CommentDiv>
              <CommentSubDiv>
                <CommentInfoDiv>
                  <ProfileImgContainer />
                  <InfoDiv>
                    <InfoMainTitleDiv>
                      <span>제주도에서 반려동물과 추천여행지 {">"}</span>
                    </InfoMainTitleDiv>
                    <InfoSubTitleDiv>
                      <span>우와 </span>
                    </InfoSubTitleDiv>
                  </InfoDiv>
                </CommentInfoDiv>
                <CommentTimeDiv>
                  <span>2023-12-31 23:31</span>
                </CommentTimeDiv>
              </CommentSubDiv>
            </CommentDiv>
          </CommentContainer>
        </SubDiv>
      </BodySubContainer>
    </BodyContainer>
  );
}

const InfoSubTitleDiv = styled.div`
  height: 19px;

  span {
    /* h8-bold-700-16px */

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
  }
`;

const InfoMainTitleDiv = styled.div`
  width: 757px;
  height: 14px;

  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;

    color: #000000;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const CommentTimeDiv = styled.div`
  width: 115px;
  height: 17px;

  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: right;

    /* grey600 */

    color: #808080;
  }
`;

const ProfileImgContainer = styled.div`
  width: 40px;
  height: 40px;
  padding-right: 16px;

  background: url(.jpg), #d9d9d9;
`;

const CommentInfoDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 813px;
  height: 41px;
`;

const CommentSubDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 928px;
  height: 41px;
`;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  gap: 8px;

  width: 960px;
  height: 89px;

  background: #ffffff;
  /* Drop Shadow */

  box-shadow: 0px 2px 12px rgba(165, 165, 165, 0.25);
  border-radius: 8px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 960px;
  height: 404px;
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

  padding-top: 80px;
`;

const MoreContainer = styled.div`
  height: 19px;

  /* h8-bold-700-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: right;

  /* grey800 */

  color: #4d4d4d;
`;

const SubTitleDiv = styled.div`
  height: 33px;

  /* h5-bold-700-28px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  /* black */

  color: #000000;
`;

const SubDivTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  width: 960px;
  height: 33px;

  justify-content: space-between;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 0px;
  gap: 40px;

  position: relative;
  width: 960px;

  :first-child {
    padding-top: 80px;
  }
`;

const BodySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: 960px;

  border-top: 1px solid #808080;
  margin-top: 80px;
`;

const ProfileBtnDiv = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: 100px;
  height: 30px;

  /* white */

  background: #ffffff;
  /* black */

  border: 1px solid #000000;
  border-radius: 4px;

  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

const ProfileBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: relative;

  height: 30px;
`;

const ProfileDescriptionContainer = styled.div`
  width: 133px;
  height: 19px;

  /* subtitle7-medium-500-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* black */

  color: #000000;
`;

const ProfileIdContainer = styled.div`
  width: 92px;
  height: 19px;

  /* h8-bold-700-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* grey800 */

  color: #4d4d4d;
`;

const ProfileNameContainer = styled.div`
  width: 128px;
  height: 26px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 26px;
  text-align: center;

  /* black */

  color: #000000;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 128px;
  height: 49px;
`;

const BodyProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: relative;
  padding-top: 24px;
  justify-content: center;
`;

const BodyProfileContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;

  background: url(.jpg), #d9d9d9;
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
  top: 369px;
  align-items: center;
  padding-bottom: 20px;
`;
