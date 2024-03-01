import { getProductList } from "@/functions/Product";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";
import { ReloadButton } from "../styles/Button.styled";

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
        <ReloadButton onClick={getProducts}>Atualizar</ReloadButton>
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

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

// const List = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 24px;
// `;

export default ProductList;
