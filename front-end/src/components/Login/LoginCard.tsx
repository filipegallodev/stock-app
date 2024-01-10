import React from "react";
import styled from "styled-components";
import Label from "../Form/Label";
import Input from "../Form/Input";
import PrimaryButton from "../Buttons/PrimaryButton";

const LoginCard = () => {
  return (
    <Card>
      <Label id="username" text="Usuário" />
      <Input id="username" />
      <Label id="password" text="Senha" />
      <Input id="password" type="password" maxLength={16} />
      <PrimaryButton text="Entrar" />
    </Card>
  );
};

const Card = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #00000025;
  color: #222;
`;

export default LoginCard;
