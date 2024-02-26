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

const RegisterCard = () => {
  const [register, setRegister] = useState<Register>({
    username: "",
    password: "",
  });
  const [warning, setWarning] = useState("");

  async function realizeRegistration(event: React.MouseEvent) {
    event.preventDefault();
    if (!verifyIfFieldsHaveContent()) return;
  }

  function verifyIfFieldsHaveContent(): boolean {
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
    if (type === "username") {
      return setRegister({ ...register, username: event.target.value });
    }
    if (type === "password") {
      return setRegister({ ...register, password: event.target.value });
    }
  }

  return (
    <FormContainer className="animeLeft">
      <FormTitle>Cadastre-se!</FormTitle>
      <StyledForm>
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
