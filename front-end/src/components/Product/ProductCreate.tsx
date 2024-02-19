import React, { useState } from "react";
import {
  InputBox,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";
import { createProduct } from "@/functions/Product";
import { Section, SectionTitle } from "../styles/Section.styled";

const defaultProductValues = {
  id: null,
  customId: "",
  name: "",
  amount: 0,
};

const ProductCreate = () => {
  const [product, setProduct] = useState<Product>(defaultProductValues);
  const [warning, setWarning] = useState("");

  async function saveProduct() {
    if (!verifyIfFieldsHaveContent()) return;
    createProduct(product);
    setProduct(defaultProductValues);
  }

  function verifyIfFieldsHaveContent(): boolean {
    if (product.customId === "") {
      setWarning("Preencha o ID do produto!");
      return false;
    }
    if (product.name === "") {
      setWarning("Preencha o nome do produto!");
      return false;
    }
    if (product.amount === null) {
      setWarning("Preencha a quantidade!");
      return false;
    }
    setWarning("");
    return true;
  }

  function assignProductValue(
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (type === "custom-id") {
      return setProduct({ ...product, customId: event.target.value });
    }
    if (type === "name") {
      return setProduct({ ...product, name: event.target.value });
    }
    if (type === "amount" && event.target.value) {
      return setProduct({ ...product, amount: Number(event.target.value) });
    }
  }

  return (
    <Section>
      <SectionTitle>Criação de Produto</SectionTitle>
      <StyledForm>
        <InputBox>
          <StyledLabel htmlFor="custom-id">ID</StyledLabel>
          <StyledInput
            placeholder="teclado-xyz"
            id="custom-id"
            value={product.customId}
            onChange={(event) => assignProductValue(event, "custom-id")}
          />
        </InputBox>
        <InputBox>
          <StyledLabel htmlFor="name">Nome</StyledLabel>
          <StyledInput
            placeholder="Teclado Gamer XYZ"
            id="name"
            value={product.name}
            onChange={(event) => assignProductValue(event, "name")}
          />
        </InputBox>
        <InputBox>
          <StyledLabel htmlFor="amount">Quantidade</StyledLabel>
          <StyledInput
            id="amount"
            value={product.amount}
            type="number"
            onChange={(event) => assignProductValue(event, "amount")}
          />
        </InputBox>
      </StyledForm>
      {warning !== "" ? <p>{warning}</p> : ""}
      <StyledButton onClick={saveProduct}>Salvar Produto</StyledButton>
    </Section>
  );
};

export default ProductCreate;
