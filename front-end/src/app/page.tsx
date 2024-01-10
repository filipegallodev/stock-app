"use client";

import LoginCard from "@/components/Login/LoginCard";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <MainTitle>Seja bem-vindo ao StockControl App!</MainTitle>
      <LoginCard />
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
