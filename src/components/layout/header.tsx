"use client";

import styled from "styled-components";
import Image from "next/image";
import petDreamImage from "../../../public/image/Petdream.png";

export default function Header() {
  return (
    <HeaderContainer>
      <PetdreamlogoDiv>
        <Image alt="petDream" src={petDreamImage} width={168} height={35} />
      </PetdreamlogoDiv>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  max-height: 897px;

  background: #333333;
`;

const PetdreamlogoDiv = styled.div`
  /* Petdream */

  position: absolute;
  width: 168px;
  height: 35px;
  left: 370px;
  top: 39px;
  padding-left: 10px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 35px;
  /* identical to box height */

  /* color */

  color: #00c67e;
`;
