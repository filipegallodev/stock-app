import React, { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/functions/Authentication";
import {
  FormContainer,
  FormTitle,
  InputBox,
  StyledForm,
  StyledInput,
  Warning,
} from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";

const LoginCard = () => {
  const [login, setLogin] = useState<Login>({ username: "", password: "" });
  const [logged, setLogged] = useState(false);
  const [warning, setWarning] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (logged) router.push("/home");
  }, [logged, router]);

  async function realizeLogin(event: MouseEvent) {
    event.preventDefault();
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
    <FormContainer className="animeLeft">
      <FormTitle>Realize seu Login!</FormTitle>
      <StyledForm>
        <InputBox>
          <StyledInput
            id="username"
            value={login.username}
            onChange={(event) => assignLoginValue(event, "username")}
            placeholder="Usuário"
          />
        </InputBox>
        <InputBox>
          <StyledInput
            id="password"
            type="password"
            maxLength={16}
            value={login.password}
            onChange={(event) => assignLoginValue(event, "password")}
            placeholder="Senha"
          />
        </InputBox>
        <StyledButton onClick={realizeLogin}>Entrar</StyledButton>
        {warning !== "" ? <Warning>{warning}</Warning> : null}
      </StyledForm>
    </FormContainer>
  );
};

export default LoginCard;
