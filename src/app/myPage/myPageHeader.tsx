"use client";

import Image from "next/image";
import petDreamImage from "../../../public/image/Petdream.svg";
import magazineImage from "../../../public/image/Magazine.svg";

import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function MyPageHeader() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <TopHeaderContainer>
        <div
          onClick={() => {
            router.push("/");
          }}
        >
          <Image alt="petDream" src={petDreamImage} width={168} height={35} />
        </div>
        <TopProfileContainer>profile</TopProfileContainer>
      </TopHeaderContainer>
      <MagazineContainer>
        <MyPageTitleContainer>My Page</MyPageTitleContainer>
      </MagazineContainer>
    </HeaderContainer>
  );
}

const MyPageTitleContainer = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 52px;
  text-align: center;

  color: #ffffff;
`;

const MagazineContainer = styled.div`
  padding-top: 47px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const TopHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 38px 100px 0 100px;
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
  color: #ffffff;
`;
const HeaderContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 369px;

  /* color */

  background: #00c67e;
`;

const PetdreamlogoDiv = styled.div`
  position: absolute;
  width: 168px;
  height: 35px;
  left: 360px;
  top: 38px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 35px;
  /* identical to box height */

  color: #ffffff;
`;
