"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <MainTitle>StockApp! Página Inicial</MainTitle>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.h1`
  color: #225;
`;
