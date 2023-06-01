"use client";

import styled from "styled-components";
import Image from "next/image";
import CommentIcon from "../../../public/image/comment_img.svg";
import { useState } from "react";
import RecentDownArrowIcon from "../../../public/image/recent_downArrow.svg";

export default function Comment() {
  const [comment, setComment] = useState<string>("");

  return (
    <Container>
      <CommentImgContainer>
        <Image src={CommentIcon} width={120} height={120} alt="comment" />
        <CommentCountContainer>
          <CommentCountSpan>Comment</CommentCountSpan>
          <CommentCount>
            <CommentCountWrap>4</CommentCountWrap>
          </CommentCount>
        </CommentCountContainer>
      </CommentImgContainer>
      <ReplyContainer>
        <InputContainer>
          <MyProfileImg></MyProfileImg>
          <InputDiv>
            <form className="commentWrap">
              <textarea
                placeholder="댓글달기..."
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </form>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <CommentBtnWrap>확인</CommentBtnWrap>
            </div>
          </InputDiv>
        </InputContainer>
        <RecentTitleContainer>
          <RecentTitle>
            최근 댓글순
            <ArrowDiv>
              <Image
                src={RecentDownArrowIcon}
                alt="downArrow"
                width={8}
                height={3.33}
              />
            </ArrowDiv>
          </RecentTitle>
        </RecentTitleContainer>
        <RecentCommentContainer>
          <RecentCommentDiv>
            <RecentUserInfoContainer>
              <MyProfileImg></MyProfileImg>
              <RecentUserInfoDiv>
                <RecentUserIdDiv>Cutedog</RecentUserIdDiv>
                <RecentTimeDiv>작성시간 2023-12-31 23:31</RecentTimeDiv>
              </RecentUserInfoDiv>
            </RecentUserInfoContainer>
            <RecentContentDiv>우와 @another_user</RecentContentDiv>
          </RecentCommentDiv>
          <RecentCommentDiv>
            <RecentUserInfoContainer>
              <MyProfileImg></MyProfileImg>
              <RecentUserInfoDiv>
                <RecentUserIdDiv>Cutedog</RecentUserIdDiv>
                <RecentTimeDiv>작성시간 2023-12-31 23:31</RecentTimeDiv>
              </RecentUserInfoDiv>
            </RecentUserInfoContainer>
            <RecentContentDiv>우와 @another_user</RecentContentDiv>
          </RecentCommentDiv>
          <RecentCommentDiv>
            <RecentUserInfoContainer>
              <MyProfileImg></MyProfileImg>
              <RecentUserInfoDiv>
                <RecentUserIdDiv>Cutedog</RecentUserIdDiv>
                <RecentTimeDiv>작성시간 2023-12-31 23:31</RecentTimeDiv>
              </RecentUserInfoDiv>
            </RecentUserInfoContainer>
            <RecentContentDiv>우와 @another_user</RecentContentDiv>
          </RecentCommentDiv>
        </RecentCommentContainer>
      </ReplyContainer>
    </Container>
  );
}

const RecentContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 56px;
  gap: 8px;

  width: 206px;
  height: 19px;
`;

const RecentTimeDiv = styled.div`
  width: 167px;
  height: 17px;

  /* subtitle8-medium-500-14px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* grey600 */

  color: #808080;
`;

const RecentUserIdDiv = styled.div`
  width: 66px;
  height: 19px;

  /* h8-bold-700-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #000000;
`;

const RecentUserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 167px;
  height: 52px;
`;

const RecentUserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 223px;
  height: 52px;
`;

const RecentCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 100%;
  height: 127px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  border-bottom: 1px solid #e6e6e6;
`;

const ArrowDiv = styled.div`
  align-content: center;
  flex-wrap: wrap;
  display: flex;
`;

const RecentTitle = styled.div`
  width: 90px;
  height: 19px;
  display: flex;

  /* h8-bold-700-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* black */

  color: #000000;

  justify-content: space-between;
`;

const RecentTitleContainer = styled.div`
  /* Auto layout */

  display: inline-flex;
  flex-direction: row;
  align-items: left;
  padding: 0px;
  gap: 8px;

  width: 101px;
  height: 19px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RecentCommentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: 556px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

const CommentBtnWrap = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  gap: 8px;

  width: 55px;
  height: 30px;

  /* grey100 */

  background: #f2f2f2;
  /* grey300 */

  border: 1px solid #cccccc;
  border-radius: 4px;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const InputDiv = styled.div`
  box-sizing: border-box;

  position: relative;
  /* width: 584px; */
  height: 112px;

  margin-left: 56px;

  /* white */

  background: #ffffff;
  /* grey300 */

  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;

  textarea {
    width: 100%;
    padding: 0;
    border: none;
    height: 80px;
    vertical-align: top;
  }
`;

const MyProfileImg = styled.div`
  width: 40px;
  height: 40px;

  background: url(.jpg), #d9d9d9;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  height: 106px;
  width: 100%;
`;

const ReplyContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 634px;
  min-height: 745px;
`;

const CommentCountWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 3px 8px;

  /* color */

  background: #00c67e;
  border-radius: 74px;
`;

const CommentCount = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px 24px;
  gap: 8px;
  color: #ffffff;
`;

const CommentCountSpan = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 35px;
  /* identical to box height */

  text-align: center;

  /* black */

  color: #000000;
`;

const CommentCountContainer = styled.div`
  /* Auto layout */

  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  padding-bottom: 10px;
`;

const CommentImgContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
