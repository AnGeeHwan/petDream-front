"use client";

import styled from "styled-components";
import Image from "next/image";
import StarIcon from "../../../public/image/star.svg";
import HeartIcon from "../../../public/image/heart.svg";
import { useRouter } from "next/navigation";

interface ICardProps {
  src?: string;
  mainTitle?: string;
  subTitle?: string;
  url?: string;
  width?: string;
}

export default function Card(CardInfo: ICardProps) {
  const router = useRouter();
  return (
    <CardContainer
      onClick={() => {
        router.push("/magazineDetail");
      }}
      width={CardInfo.width}
    >
      <ImgContainer>
        <img
          src={CardInfo.src}
          width={CardInfo.width ? CardInfo.width : "100%"}
        />
      </ImgContainer>
      <TitleContainer>
        <MagazineInfoDiv>
          <PlaceContainer>Place</PlaceContainer>
          <MagazineSideContainer>
            <LikeContainer>
              <Image alt="star" src={StarIcon} />
              <span>+9999</span>
            </LikeContainer>
            <LikeContainer>
              <Image alt="heart" src={HeartIcon} width={16} height={16} />
              <span>+9999</span>
            </LikeContainer>
          </MagazineSideContainer>
        </MagazineInfoDiv>
        <MagazineTitleDiv>
          <MagazineMainTitle>{CardInfo.mainTitle}</MagazineMainTitle>
          <MagazineSubTitle>{CardInfo.subTitle}</MagazineSubTitle>
        </MagazineTitleDiv>
      </TitleContainer>
    </CardContainer>
  );
}

const MagazineSubTitle = styled.div`
  /* subtitle7-medium-500-16px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  overflow: hidden;
  text-overflow: ellipse;
`;

const MagazineMainTitle = styled.div`
  /* h7-bold-700-20px */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MagazineTitleDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  height: 51px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const PlaceContainer = styled.div`
  /* Place */

  width: 60px;
  height: 17px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;

  /* black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LikeContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 57px;
  height: 16px;
  overflow: hidden;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    /* body9-light-300-12px */

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

const MagazineSideContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 122px;
  height: 16px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const MagazineInfoDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: 17px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: 92px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ImgContainer = styled.div``;

const CardContainer = styled.div<ICardProps>`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: ${(props) => (props.width ? props.width : "384px")};
  height: 329px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
