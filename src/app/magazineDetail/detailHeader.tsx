"use client";

import Image from "next/image";
import petDreamImage from "../../../public/image/Petdream.svg";
import magazineImage from "../../../public/image/Magazine.svg";

import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function DetailHeader() {
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
        <TopProfileContainer
          onClick={() => {
            router.push("/myPage");
          }}
        >
          profile
        </TopProfileContainer>
      </TopHeaderContainer>
      {/* <MagazineContainer>
        <div>
          <Image alt="magazine" src={magazineImage} width={249} />
        </div>
      </MagazineContainer> */}
    </HeaderContainer>
  );
}

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

  /* padding: 38px 100px 0 100px; */
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 360px;
  gap: 8px;

  position: relative;
  width: 1920px;
  height: 99px;

  /* color */

  background: #94db3a;

  @media screen and (max-width: 1024px) {
    padding: 32px 48px;
    width: 1024px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px;
    width: 768px;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 24px;
    gap: 8px;

    position: relative;
    width: 375px;
    height: 90px;

    /* white */

    background: #ffffff;
  }
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
