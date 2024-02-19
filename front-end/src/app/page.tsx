"use client";

import Header from "@/components/Header/Header";
import LoginCard from "@/components/Login/LoginCard";
import RegisterCard from "@/components/Register/RegisterCard";
import { SecondaryButton } from "@/components/styles/Button.styled";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [action, setAction] = useState("login");

  return (
    <>
      <Header />
      <Main>
        <Container>
          {action === "login" ? (
            <div>
              <LoginCard />
              <SecondaryButton onClick={() => setAction("register")}>
                Ainda não possui uma conta? Cadastre-se!
              </SecondaryButton>
            </div>
          ) : (
            <div>
              <RegisterCard />
              <SecondaryButton onClick={() => setAction("login")}>
                Já possui uma conta? Faça login!
              </SecondaryButton>
            </div>
          )}
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
