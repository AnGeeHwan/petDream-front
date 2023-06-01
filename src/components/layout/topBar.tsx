"use client";

import styled from "styled-components";
import Image from "next/image";
import petDreamImage from "../../../public/image/Petdream.png";

export default function TopBar() {
  return (
    <TopBarContainer>
      <Image alt="petDream" src={petDreamImage} width={168} height={35} />
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div`
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
