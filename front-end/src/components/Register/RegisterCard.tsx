import React, { MouseEventHandler, useState } from "react";
import {
  FormContainer,
  FormTitle,
  InputBox,
  StyledForm,
  StyledInput,
  Warning,
} from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";
import { createUser } from "@/functions/Authentication";

const registerDefault = {
  name: "",
  username: "",
  password: "",
};

const RegisterCard = () => {
  const [register, setRegister] = useState<User>(registerDefault);
  const [warning, setWarning] = useState("");

  async function realizeRegistration(event: React.MouseEvent) {
    event.preventDefault();
    if (!verifyIfFieldsHaveContent()) return;
    const response = await createUser(register);
    if (response) {
      setRegister(registerDefault);
    }
  }

  function verifyIfFieldsHaveContent(): boolean {
    if (register.name === "") {
      setWarning("Preencha seu nome!");
      return false;
    }
    if (register.username === "") {
      setWarning("Preencha o usuário!");
      return false;
    }
    if (register.password === "") {
      setWarning("Preencha a senha!");
      return false;
    }
    setWarning("");
    return true;
  }

  function assignRegisterValue(
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (type === "name") {
      return setRegister({ ...register, name: event.target.value });
    }
    if (type === "username") {
      return setRegister({ ...register, username: event.target.value });
    }
    if (type === "password") {
      return setRegister({ ...register, password: event.target.value });
    }
  }

  return (
    <FormContainer>
      <FormTitle>Cadastre-se!</FormTitle>
      <StyledForm>
        <InputBox>
          <StyledInput
            id="name"
            value={register.name}
            onChange={(event) => assignRegisterValue(event, "name")}
            placeholder="Nome completo"
          />
        </InputBox>
        <InputBox>
          <StyledInput
            id="username"
            value={register.username}
            onChange={(event) => assignRegisterValue(event, "username")}
            placeholder="Usuário"
          />
        </InputBox>
        <InputBox>
          <StyledInput
            id="password"
            type="password"
            maxLength={16}
            value={register.password}
            onChange={(event) => assignRegisterValue(event, "password")}
            placeholder="Nova senha"
          />
        </InputBox>
        <StyledButton onClick={realizeRegistration}>Registrar</StyledButton>
        {warning !== "" ? <Warning>{warning}</Warning> : ""}
      </StyledForm>
    </FormContainer>
  );
};

export default RegisterCard;
