import { getProductList } from "@/functions/Product";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductListCard from "./ProductListCard";
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
    <Section>
      <SectionHeader>
        <SectionTitle>Estoque</SectionTitle>
        <ReloadButton onClick={getProducts}>R.</ReloadButton>
      </SectionHeader>
      {list?.length > 0 ? (
        <List>
          {list.map((product) => {
            return <ProductListCard product={product} key={product.id} />;
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
  padding: 8px;
  border: none;
  box-shadow: 0px 0px 0px 2px #00000050;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    box-shadow: 0px 0px 0px 2px #000000;
  }
  &:active {
    box-shadow: 0px 0px 0px 2px #2c3dda;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export default ProductList;
