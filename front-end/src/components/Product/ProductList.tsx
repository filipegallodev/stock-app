import { getProductList } from "@/functions/Product";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductListCard from "./ProductListCard";

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

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 24px 0px;
`;

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
