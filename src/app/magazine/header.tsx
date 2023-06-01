"use client";

import styled from "styled-components";
import Image from "next/image";
import petDreamImage from "../../../public/image/Petdream.png";

export default function MagazineHeader() {
  return (
    <HeaderContainer>
      <TopHeaderContainer>
        <LogoContainer>
          <Image alt="leeerob" src={petDreamImage} placeholder="blur" />
        </LogoContainer>
        <TopProfileContainer>profile</TopProfileContainer>
      </TopHeaderContainer>
      <MainHeaderContainer>반려동물 전문 매거진 ‘ 펫드림’ </MainHeaderContainer>
      <SubHeaderContainer>
        함께 건강하고 즐거운 반려동물 생활을 즐기세요.
      </SubHeaderContainer>
    </HeaderContainer>
  );
}

const SubHeaderContainer = styled.div`
  padding-top: 32px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  /* white */

  color: #ffffff;
`;

const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 574px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  text-align: center;

  /* white */

  color: #ffffff;
`;

const TopProfileContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 106px;
  height: 32px;
`;

const TopHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const HeaderContainer = styled.div`
  display: flex;

  width: 100%;
  left: 0px;
  top: 0px;

  padding: 39px 10%;

  flex-direction: column;

  background: #333333;
`;
