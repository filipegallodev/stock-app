import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Styled from "../styles/Button.styled";
import { useRouter } from "next/navigation";
import { loginUser } from "@/functions/Authentication";

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
      <form>
        <div>
          <StyledLabel htmlFor="username">Usuário</StyledLabel>
          <StyledInput
            id="username"
            value={login.username}
            onChange={(event) => assignLoginValue(event, "username")}
          />
        </div>
        <div>
          <StyledLabel htmlFor="password">Senha</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            maxLength={16}
            value={login.password}
            onChange={(event) => assignLoginValue(event, "password")}
          />
        </div>
      </form>
      {warning !== "" ? <p>{warning}</p> : ""}
      <Styled.Button onClick={realizeLogin}>Entrar</Styled.Button>
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

const StyledLabel = styled.label`
  display: block;
  font-size: 1.25rem;
`;

const StyledInput = styled.input`
  display: block;
  margin-bottom: 32px;
  font-size: 1.125rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
`;

export default LoginCard;
