import { getProductList } from "@/functions/Product";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";

const ProductList = () => {
  const [list, setList] = useState<Array<Product>>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const result = await getProductList();
    if (result !== undefined) {
      setList(result);
    }
  }

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Controle de Estoque</SectionTitle>
        <ReloadButton onClick={getProducts}>Recarregar</ReloadButton>
      </SectionHeader>
      {list?.length > 0 ? (
        <List>
          {list.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </List>
      ) : (
        <div>
          <p>Nenhum produto encontrado.</p>
        </div>
      )}
    </Section>
  );
};

const ReloadButton = styled.button`
  background-color: #fff;
  padding: 8px 24px;
  border: none;
  box-shadow: 0px 0px 0px 2px #00000050;
  border-radius: 10px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    color: #f70;
    box-shadow: 0px 0px 0px 2px #f70;
  }
  &:active {
    box-shadow: 0px 0px 0px 2px #f50;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export default ProductList;
