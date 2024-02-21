"use client";

import Header from "@/components/Header/Header";
import ProductCreate from "@/components/Product/ProductCreate";
import ProductList from "@/components/Product/ProductList";
import { useState } from "react";
import styled from "styled-components";

export default function Estoque() {
  const [action, setAction] = useState("stock");

  return (
    <>
      <Header />
      <main>
        <SectionSwapper>
          <SectionSwapperButton
            onClick={() => setAction("stock")}
            className={action === "stock" ? "active" : ""}
          >
            Estoque
          </SectionSwapperButton>
          <SectionSwapperButton
            onClick={() => setAction("new-product")}
            className={action === "new-product" ? "active" : ""}
          >
            Novo Produto
          </SectionSwapperButton>
        </SectionSwapper>
        {action === "stock" ? <ProductList /> : <ProductCreate />}
      </main>
    </>
  );
}

const SectionSwapper = styled.div`
  margin: 24px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionSwapperButton = styled.button`
  width: 200px;
  padding: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #777;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.1s;
  &:hover,
  &.active {
    border-bottom: 2px solid #f70;
  }
`;
