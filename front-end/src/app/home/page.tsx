"use client";

import Header from "@/components/Header/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
