import React from "react";
import SaleProductCard from "./SaleProductCard";
import styled from "styled-components";

const SaleProductList = ({ productList }: { productList: Array<Product> }) => {
  return (
    <List>
      {productList.map((product) => (
        <SaleProductCard product={product} key={product.id} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
`;

export default SaleProductList;
