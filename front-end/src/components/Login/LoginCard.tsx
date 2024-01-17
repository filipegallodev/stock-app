import React from "react";
import styled from "styled-components";
import Label from "../Form/Label";
import Input from "../Form/Input";
import * as Styled from "../styles/Button.styled";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const router = useRouter();

  return (
    <Card>
      <form>
        <div>
          <Label id="username" text="Usuário" />
          <Input id="username" />
        </div>
        <div>
          <Label id="password" text="Senha" />
          <Input id="password" type="password" maxLength={16} />
        </div>
      </form>
      <Styled.Button onClick={() => router.push("/home")}>Entrar</Styled.Button>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #00000025;
  color: #222;
`;

export default LoginCard;
