"use client";

import Header from "@/components/Header/Header";
import LoginCard from "@/components/Login/LoginCard";
import RegisterCard from "@/components/Register/RegisterCard";
import { SecondaryButton } from "@/components/styles/Button.styled";
import { Section } from "@/components/styles/Section.styled";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [action, setAction] = useState("login");

  return (
    <>
      <Header />
      <main className="animeLeft">
        <Section>
          <Container>
            {action === "login" ? (
              <Card>
                <LoginCard />
                <SecondaryButton onClick={() => setAction("register")}>
                  Ainda não possui uma conta? Cadastre-se!
                </SecondaryButton>
              </Card>
            ) : (
              <Card>
                <RegisterCard />
                <SecondaryButton onClick={() => setAction("login")}>
                  Já possui uma conta? Faça login!
                </SecondaryButton>
              </Card>
            )}
          </Container>
        </Section>
      </main>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
