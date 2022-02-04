import React from "react";
import { Footer, Logo } from "../components";
import styled from "@emotion/styled";

const Link = styled.a`
  &:hover {
    display: table;
    background: linear-gradient(100deg, #96c2d7 25%, #e9500e 55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default () => (
  <>
    <main className="container max-w-screen-xl mx-auto flex flex-col grow h-[100%]">
      <Logo className="mt-[100px]" />
      <nav className="flex flex-col text-5xl items-start justify-center grow">
        <Link className="mb-[9px]" href="/agency">
          agentur
        </Link>
        <Link className="mb-[9px]" href="/portfolio">
          portfolio
        </Link>
        <Link className="mb-[9px]" href="/blog">
          blog
        </Link>
        <Link className="mb-[9px]" href="/contact">
          kontakt
        </Link>
      </nav>
    </main>
    <Footer />
  </>
);
