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
      console.log(result);
      setList(result);
    }
  }

  if (list?.length > 0) {
    return (
      <Section>
        <SectionTitle>Estoque</SectionTitle>
        <List>
          {list.map((product) => {
            return <ProductListCard product={product} key={product.id} />;
          })}
        </List>
      </Section>
    );
  }
  return (
    <div>
      <p>Nenhum produto encontrado.</p>
    </div>
  );
};

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 24px 0px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export default ProductList;
