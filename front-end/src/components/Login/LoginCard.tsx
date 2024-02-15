import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Styled from "../styles/Button.styled";
import { useRouter } from "next/navigation";
import { loginUser } from "@/functions/Authentication";
import { InputBox, StyledForm, StyledInput, StyledLabel } from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";

const LoginCard = () => {
  const [login, setLogin] = useState<Login>({ username: "", password: "" });
  const [logged, setLogged] = useState(false);
  const [warning, setWarning] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (logged) router.push("/home");
  }, [logged, router]);

  async function realizeLogin() {
    if (!verifyIfFieldsHaveContent()) return;
    setLogged(await loginUser(login));
  }

  function verifyIfFieldsHaveContent(): boolean {
    if (login.username === "") {
      setWarning("Preencha o usuário!");
      return false;
    }
    if (login.password === "") {
      setWarning("Preencha a senha!");
      return false;
    }
    setWarning("");
    return true;
  }

  function assignLoginValue(
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (type === "username") {
      return setLogin({ ...login, username: event.target.value });
    }
    if (type === "password") {
      return setLogin({ ...login, password: event.target.value });
    }
  }

  return (
    <Card>
      <StyledForm>
        <InputBox>
          <StyledLabel htmlFor="username">Usuário</StyledLabel>
          <StyledInput
            id="username"
            value={login.username}
            onChange={(event) => assignLoginValue(event, "username")}
          />
        </InputBox>
        <InputBox>
          <StyledLabel htmlFor="password">Senha</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            maxLength={16}
            value={login.password}
            onChange={(event) => assignLoginValue(event, "password")}
          />
        </InputBox>
      </StyledForm>
      {warning !== "" ? <p>{warning}</p> : ""}
      <StyledButton onClick={realizeLogin}>Entrar</StyledButton>
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
