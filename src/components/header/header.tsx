import React from 'react';
import styled from "@emotion/styled";
import back from "./back.svg";
import { SmallLogo } from "../SmallLogo";

export const Back = styled.a`
  background: url("${back}") center center no-repeat;
`;

export const Header = () => (
  <>
    <Back
      href="/"
      className="inline-block w-[64px] h-[64px] mr-[132px] absolute top-[110px] left-[160px]"
    />

    <header className="container max-w-screen-xl mx-auto flex pt-[110px] pb-[64px]">
      <SmallLogo />
    </header>
  </>
);
