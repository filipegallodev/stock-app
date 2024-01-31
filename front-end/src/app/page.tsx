"use client";

import Header from "@/components/Header/Header";
import LoginCard from "@/components/Login/LoginCard";
import styled from "styled-components";

export default function Login() {
  return (
    <Main>
      <Header />
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
